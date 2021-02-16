import {
  Resolver,
  Query,
  Parent,
  ResolveField,
  Args,
  Mutation,
  Int,
} from '@nestjs/graphql'
import { PrismaService } from '@resources/prisma/prisma.service'
import { Product, ProductStatus } from './product.entity'
import { User } from '@resources/user/user.entity'
import { ProductService } from './product.service'
import { CurrentUser } from '@decorators/current-user.decorator'
import { IsAuthGuard } from '@guards/is-auth.guard'
import { UseGuards } from '@nestjs/common'
import { ForbiddenException } from '@nestjs/common'
import { CreateProductInput } from './dto/create-product.input'
import { UpdateProductInput } from './dto/update-product.input'
import { Action, ProductAbility } from './product.ability'

@Resolver(Product)
export class ProductResolver {
  constructor(
    private productService: ProductService,
    private prisma: PrismaService,
    private ability: ProductAbility
  ) {}

  @ResolveField('owner')
  async owner(@Parent() product: Product) {
    return this.prisma.product.findUnique({ where: { id: product.id } }).owner()
  }

  @Query(() => [ProductStatus], { nullable: true })
  productStatuses() {
    return Object.values(ProductStatus)
  }

  @Query(() => [Product], { nullable: true })
  products(@CurrentUser() user: User) {
    const ability = this.ability.create(user)

    if (!ability.can(Action.READ, Product)) {
      throw new ForbiddenException('FORBIDDEN_ACCESS')
    }

    return this.productService.getAllProducts()
  }

  @Query(() => Product)
  product(@Args('id') id: number, @CurrentUser() user: User) {
    const ability = this.ability.create(user)

    console.log(ability)

    if (ability.cannot(Action.READ, Product)) {
      throw new ForbiddenException('FORBIDDEN_ACCESS')
    }

    return this.productService.getProduct(id)
  }

  @UseGuards(IsAuthGuard)
  @Mutation(() => Product)
  createProduct(
    @Args('data') data: CreateProductInput,
    @CurrentUser() user: User
  ) {
    const ability = this.ability.create(user)

    if (ability.cannot(Action.CREATE, Product)) {
      throw new ForbiddenException('FORBIDDEN_ACCESS')
    }

    return this.productService.createProduct(data, user)
  }

  @UseGuards(IsAuthGuard)
  @Mutation(() => Product)
  updateProduct(
    @Args('data') data: UpdateProductInput,
    @CurrentUser() user: User
  ) {
    const ability = this.ability.create(user)

    if (ability.cannot(Action.UPDATE, Product)) {
      throw new ForbiddenException('FORBIDDEN_ACCESS')
    }

    return this.productService.updateProduct(data)
  }

  @UseGuards(IsAuthGuard)
  @Mutation(() => Int)
  async deleteProduct(@Args('id') id: number, @CurrentUser() user: User) {
    const ability = this.ability.create(user)

    if (ability.cannot(Action.DELETE, Product)) {
      throw new ForbiddenException('FORBIDDEN_ACCESS')
    }

    const product = await this.productService.deleteProduct(id, user)

    return product.id
  }
}
