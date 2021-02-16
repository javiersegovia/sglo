export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any
}

export type Address = {
  __typename?: 'Address'
  companyInfo?: Maybe<CompanyInformation>
  country: Country
  /** Identifies the date and time when the object was created */
  createdAt: Scalars['DateTime']
  description?: Maybe<Scalars['String']>
  id: Scalars['ID']
  owner?: Maybe<UserInformation>
  postalCode?: Maybe<Scalars['String']>
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime']
}

export type Category = {
  __typename?: 'Category'
  /** Identifies the date and time when the object was created */
  createdAt: Scalars['DateTime']
  id: Scalars['Int']
  name: Scalars['String']
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime']
}

export type CategoryInput = {
  id: Scalars['Int']
}

export type Company = {
  __typename?: 'Company'
  /** Identifies the date and time when the object was created */
  createdAt: Scalars['DateTime']
  id: Scalars['Int']
  information?: Maybe<CompanyInformation>
  members: Array<CompanyMember>
  name: Scalars['String']
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime']
}

export type CompanyInformation = {
  __typename?: 'CompanyInformation'
  address?: Maybe<Array<Address>>
  categories?: Maybe<Array<Category>>
  company: Company
  country?: Maybe<Country>
  /** Identifies the date and time when the object was created */
  createdAt: Scalars['DateTime']
  description?: Maybe<Scalars['String']>
  id: Scalars['ID']
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime']
}

export type CompanyMember = {
  __typename?: 'CompanyMember'
  company: Company
  /** Identifies the date and time when the object was created */
  createdAt: Scalars['DateTime']
  id: Scalars['Int']
  roles: Array<CompanyMemberRole>
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime']
  user: User
}

/** Company member role */
export enum CompanyMemberRole {
  Manager = 'MANAGER',
  Member = 'MEMBER',
  Owner = 'OWNER',
}

export type Country = {
  __typename?: 'Country'
  code2: Scalars['String']
  /** Identifies the date and time when the object was created */
  createdAt: Scalars['DateTime']
  flag: Scalars['String']
  id: Scalars['Int']
  name: Scalars['String']
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime']
}

export type CountryInput = {
  id: Scalars['Int']
}

export type CreateCategoryInput = {
  name: Scalars['String']
}

export type CreateCompanyInput = {
  information?: Maybe<UpdateCompanyInformationInput>
  name: Scalars['String']
}

export type CreateCountryInput = {
  code2: Scalars['String']
  flag: Scalars['String']
  name: Scalars['String']
}

export type CreateOrderInput = {
  buyerId: Scalars['Int']
  products: Array<CreateOrderProductInput>
  sellerId: Scalars['Int']
}

export type CreateOrderProductInput = {
  description?: Maybe<Scalars['String']>
  name: Scalars['String']
  price: Scalars['Int']
  quantity: Scalars['Int']
}

export type CreateOrUpdateAddressInput = {
  country: CountryInput
  description?: Maybe<Scalars['String']>
  postalCode?: Maybe<Scalars['String']>
}

export type CreateProductInput = {
  description?: Maybe<Scalars['String']>
  name: Scalars['String']
  price: Scalars['Int']
}

/** User gender */
export enum Gender {
  Female = 'FEMALE',
  Male = 'MALE',
  NonBinary = 'NON_BINARY',
}

export type Mutation = {
  __typename?: 'Mutation'
  createCategory: Category
  createCompany: Company
  createCountry: Country
  createOrder: Order
  createProduct: Product
  deleteCategory: Scalars['Int']
  deleteCompany: Scalars['Boolean']
  deleteCountry: Scalars['Int']
  deleteOrder: Scalars['Boolean']
  deleteProduct: Scalars['Int']
  login: User
  logout: Scalars['Boolean']
  register: Scalars['Boolean']
  requestResetPassword: Scalars['Boolean']
  resendVerificationEmail: Scalars['Boolean']
  resetPassword: Scalars['Boolean']
  updateCategory: Category
  updateCompany: Company
  updateCountry: Country
  updateCurrentUser: Scalars['Boolean']
  updateOrder: Order
  updateProduct: Product
  verifyEmail: Scalars['Boolean']
}

export type MutationCreateCategoryArgs = {
  data: CreateCategoryInput
}

export type MutationCreateCompanyArgs = {
  data: CreateCompanyInput
}

export type MutationCreateCountryArgs = {
  data: CreateCountryInput
}

export type MutationCreateOrderArgs = {
  data: CreateOrderInput
}

export type MutationCreateProductArgs = {
  data: CreateProductInput
}

export type MutationDeleteCategoryArgs = {
  id: Scalars['Int']
}

export type MutationDeleteCompanyArgs = {
  id: Scalars['Int']
}

export type MutationDeleteCountryArgs = {
  id: Scalars['Int']
}

export type MutationDeleteOrderArgs = {
  id: Scalars['Int']
}

export type MutationDeleteProductArgs = {
  id: Scalars['Int']
}

export type MutationLoginArgs = {
  data: SignInInput
}

export type MutationRegisterArgs = {
  data: SignupInput
}

export type MutationRequestResetPasswordArgs = {
  email: Scalars['String']
}

export type MutationResendVerificationEmailArgs = {
  email: Scalars['String']
}

export type MutationResetPasswordArgs = {
  data: ResetPasswordInput
}

export type MutationUpdateCategoryArgs = {
  data: UpdateCategoryInput
}

export type MutationUpdateCompanyArgs = {
  data: UpdateCompanyInput
}

export type MutationUpdateCountryArgs = {
  data: UpdateCountryInput
}

export type MutationUpdateCurrentUserArgs = {
  data: UpdateUserInput
}

export type MutationUpdateOrderArgs = {
  data: UpdateOrderInput
}

export type MutationUpdateProductArgs = {
  data: UpdateProductInput
}

export type MutationVerifyEmailArgs = {
  token: Scalars['String']
}

export type Order = {
  __typename?: 'Order'
  buyer: User
  /** Identifies the date and time when the object was created */
  createdAt: Scalars['DateTime']
  id: Scalars['Int']
  products: Array<OrderProduct>
  seller: Company
  totalPrice: Scalars['Int']
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime']
}

export type OrderProduct = {
  __typename?: 'OrderProduct'
  /** Identifies the date and time when the object was created */
  createdAt: Scalars['DateTime']
  description?: Maybe<Scalars['String']>
  id: Scalars['Int']
  name: Scalars['String']
  order: Order
  price: Scalars['Int']
  quantity: Scalars['Int']
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime']
}

export type Post = {
  __typename?: 'Post'
  author?: Maybe<User>
  content?: Maybe<Scalars['String']>
  /** Identifies the date and time when the object was created */
  createdAt: Scalars['DateTime']
  id: Scalars['ID']
  published: Scalars['Boolean']
  title: Scalars['String']
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime']
}

export type Product = {
  __typename?: 'Product'
  /** Identifies the date and time when the object was created */
  createdAt: Scalars['DateTime']
  description?: Maybe<Scalars['String']>
  id: Scalars['Int']
  name: Scalars['String']
  owner: Company
  price: Scalars['Int']
  status: ProductStatus
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime']
}

/** Product status (visibility) role */
export enum ProductStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
}

export type Query = {
  __typename?: 'Query'
  categories?: Maybe<Array<Category>>
  category: Category
  companies?: Maybe<Array<Company>>
  company: Company
  countries?: Maybe<Array<Country>>
  country: Country
  currentUser: User
  order?: Maybe<Order>
  orders?: Maybe<Array<Order>>
  post?: Maybe<Post>
  product: Product
  products?: Maybe<Array<Product>>
  productStatuses?: Maybe<Array<ProductStatus>>
  publishedPosts?: Maybe<Array<Post>>
  user?: Maybe<User>
  users?: Maybe<Array<User>>
}

export type QueryCategoryArgs = {
  id: Scalars['Int']
}

export type QueryCompanyArgs = {
  id: Scalars['Int']
}

export type QueryCountryArgs = {
  id: Scalars['Int']
}

export type QueryOrderArgs = {
  id: Scalars['Int']
}

export type QueryPostArgs = {
  id: Scalars['String']
}

export type QueryProductArgs = {
  id: Scalars['Int']
}

export type QueryUserArgs = {
  id: Scalars['Int']
}

export type ResetPasswordInput = {
  password: Scalars['String']
  resetPasswordToken: Scalars['String']
}

export type SignInInput = {
  email: Scalars['String']
  password: Scalars['String']
}

export type SignupInput = {
  email: Scalars['String']
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  password: Scalars['String']
}

export type UpdateCategoryInput = {
  id: Scalars['Int']
  name: Scalars['String']
}

export type UpdateCompanyInformationInput = {
  address?: Maybe<CreateOrUpdateAddressInput>
  categories?: Maybe<Array<CategoryInput>>
  country?: Maybe<CountryInput>
  description?: Maybe<Scalars['String']>
}

export type UpdateCompanyInput = {
  id: Scalars['Int']
  name: Scalars['String']
}

export type UpdateCountryInput = {
  code2: Scalars['String']
  flag: Scalars['String']
  id: Scalars['Int']
  name: Scalars['String']
}

export type UpdateOrderInput = {
  buyerId: Scalars['Int']
  id: Scalars['Int']
  products: Array<UpdateOrderProductInput>
  sellerId: Scalars['Int']
}

export type UpdateOrderProductInput = {
  description?: Maybe<Scalars['String']>
  id: Scalars['Int']
  name: Scalars['String']
  price: Scalars['Int']
  quantity: Scalars['Int']
}

export type UpdateProductInput = {
  description?: Maybe<Scalars['String']>
  id: Scalars['Int']
  name: Scalars['String']
  price: Scalars['Int']
}

export type UpdateUserInformationInput = {
  address?: Maybe<CreateOrUpdateAddressInput>
  birthDate?: Maybe<Scalars['DateTime']>
  gender?: Maybe<Gender>
  nationality?: Maybe<Array<CountryInput>>
  occupation?: Maybe<Scalars['String']>
}

export type UpdateUserInput = {
  firstName?: Maybe<Scalars['String']>
  information?: Maybe<UpdateUserInformationInput>
  lastName?: Maybe<Scalars['String']>
}

export type User = {
  __typename?: 'User'
  companyMember?: Maybe<CompanyMember>
  /** Identifies the date and time when the object was created */
  createdAt: Scalars['DateTime']
  email: Scalars['String']
  firstName?: Maybe<Scalars['String']>
  id: Scalars['Int']
  information?: Maybe<UserInformation>
  lastName?: Maybe<Scalars['String']>
  posts?: Maybe<Array<Post>>
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime']
  verification: UserVerification
}

export type UserInformation = {
  __typename?: 'UserInformation'
  address?: Maybe<Address>
  birthDate?: Maybe<Scalars['DateTime']>
  /** Identifies the date and time when the object was created */
  createdAt: Scalars['DateTime']
  gender?: Maybe<Gender>
  id: Scalars['ID']
  nationality?: Maybe<Array<Country>>
  occupation?: Maybe<Scalars['String']>
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime']
  user: User
}

export type UserVerification = {
  __typename?: 'UserVerification'
  verifiedEmail: Scalars['Boolean']
}

export type ChangePasswordMutationVariables = Exact<{
  data: ResetPasswordInput
}>

export type ChangePasswordMutation = { __typename?: 'Mutation' } & Pick<
  Mutation,
  'resetPassword'
>

export type CreateCompanyMutationVariables = Exact<{
  data: CreateCompanyInput
}>

export type CreateCompanyMutation = { __typename?: 'Mutation' } & {
  createCompany: { __typename?: 'Company' } & Pick<Company, 'id'>
}

export type RequestConfirmationEmailMutationVariables = Exact<{
  email: Scalars['String']
}>

export type RequestConfirmationEmailMutation = {
  __typename?: 'Mutation'
} & Pick<Mutation, 'resendVerificationEmail'>

export type RequestPasswordMutationVariables = Exact<{
  email: Scalars['String']
}>

export type RequestPasswordMutation = { __typename?: 'Mutation' } & Pick<
  Mutation,
  'requestResetPassword'
>

export type SignInMutationVariables = Exact<{
  data: SignInInput
}>

export type SignInMutation = { __typename?: 'Mutation' } & {
  login: { __typename?: 'User' } & Pick<User, 'id'> & {
      information?: Maybe<
        { __typename?: 'UserInformation' } & Pick<UserInformation, 'id'>
      >
    }
}

export type SignOutMutationVariables = Exact<{ [key: string]: never }>

export type SignOutMutation = { __typename?: 'Mutation' } & Pick<
  Mutation,
  'logout'
>

export type SignUpMutationVariables = Exact<{
  data: SignupInput
}>

export type SignUpMutation = { __typename?: 'Mutation' } & Pick<
  Mutation,
  'register'
>

export type UpdateCurrentUserMutationVariables = Exact<{
  data: UpdateUserInput
}>

export type UpdateCurrentUserMutation = { __typename?: 'Mutation' } & Pick<
  Mutation,
  'updateCurrentUser'
>

export type VerifyEmailMutationVariables = Exact<{
  token: Scalars['String']
}>

export type VerifyEmailMutation = { __typename?: 'Mutation' } & Pick<
  Mutation,
  'verifyEmail'
>

export type CategoriesQueryVariables = Exact<{ [key: string]: never }>

export type CategoriesQuery = { __typename?: 'Query' } & {
  categories?: Maybe<
    Array<{ __typename?: 'Category' } & Pick<Category, 'id' | 'name'>>
  >
}

export type CompaniesQueryVariables = Exact<{ [key: string]: never }>

export type CompaniesQuery = { __typename?: 'Query' } & {
  companies?: Maybe<
    Array<
      { __typename?: 'Company' } & Pick<Company, 'id' | 'name'> & {
          members: Array<
            { __typename?: 'CompanyMember' } & Pick<
              CompanyMember,
              'id' | 'roles'
            > & { user: { __typename?: 'User' } & Pick<User, 'email'> }
          >
        }
    >
  >
}

export type CountriesQueryVariables = Exact<{ [key: string]: never }>

export type CountriesQuery = { __typename?: 'Query' } & {
  countries?: Maybe<
    Array<{ __typename?: 'Country' } & Pick<Country, 'id' | 'name' | 'flag'>>
  >
}

export type CurrentUserQueryVariables = Exact<{ [key: string]: never }>

export type CurrentUserQuery = { __typename?: 'Query' } & {
  currentUser: { __typename?: 'User' } & Pick<
    User,
    'id' | 'email' | 'firstName' | 'lastName'
  > & {
      verification: { __typename?: 'UserVerification' } & Pick<
        UserVerification,
        'verifiedEmail'
      >
      companyMember?: Maybe<
        { __typename?: 'CompanyMember' } & Pick<CompanyMember, 'roles'> & {
            company: { __typename?: 'Company' } & Pick<Company, 'id' | 'name'>
          }
      >
    }
}

export type CurrentUserProfileDataQueryVariables = Exact<{
  [key: string]: never
}>

export type CurrentUserProfileDataQuery = { __typename?: 'Query' } & {
  currentUser: { __typename?: 'User' } & Pick<
    User,
    'id' | 'email' | 'firstName' | 'lastName'
  > & {
      information?: Maybe<
        { __typename?: 'UserInformation' } & Pick<
          UserInformation,
          'gender' | 'birthDate' | 'occupation'
        > & {
            nationality?: Maybe<
              Array<{ __typename?: 'Country' } & Pick<Country, 'id'>>
            >
            address?: Maybe<
              { __typename?: 'Address' } & Pick<
                Address,
                'description' | 'postalCode'
              > & {
                  country: { __typename?: 'Country' } & Pick<
                    Country,
                    'id' | 'name'
                  >
                }
            >
          }
      >
    }
  countries?: Maybe<
    Array<{ __typename?: 'Country' } & Pick<Country, 'id' | 'name'>>
  >
}

export type ProductStatusesQueryVariables = Exact<{ [key: string]: never }>

export type ProductStatusesQuery = { __typename?: 'Query' } & Pick<
  Query,
  'productStatuses'
>

export type UsersQueryVariables = Exact<{ [key: string]: never }>

export type UsersQuery = { __typename?: 'Query' } & {
  users?: Maybe<
    Array<
      { __typename?: 'User' } & Pick<
        User,
        'id' | 'email' | 'firstName' | 'lastName'
      >
    >
  >
}
