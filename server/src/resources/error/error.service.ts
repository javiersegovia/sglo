import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
import { Prisma } from '@prisma/client'

// We should use this service for formatting errors across the codebase
// If we are handling "field" errors (with custom validations or so) we should return
// A consistent response format to the frontend

@Injectable()
export class ErrorService {
  handleUnknownError(error: any) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return this.handlePrismaError(error)
    }

    throw new Error(error)
  }

  // Check Prisma Errors for reference
  // https://www.prisma.io/docs/concepts/components/prisma-client/error-reference
  handlePrismaError(error: Prisma.PrismaClientKnownRequestError) {
    switch (error.code) {
      case 'P2002':
        return this.handlePrismaConflictError(error)
      case 'P2015':
        return this.handlePrismaNotFoundError(error)
      default:
        console.warn(
          `Not found error handler for Prisma Error Code: ${error.code}`
        )
    }

    throw new Error()
  }

  handlePrismaConflictError(error: Prisma.PrismaClientKnownRequestError) {
    const data = {}

    error.meta?.['target']?.forEach((fieldName) => {
      data[fieldName] = 'Already in use. Please choose a new one'
    })

    throw new ConflictException({
      data,
      message: 'There is a conflict error.',
    })
  }

  handlePrismaNotFoundError(error: any) {
    const data = {}

    error.meta?.['target']?.forEach((fieldName) => {
      data[fieldName] = 'The thing you are looking for was not found'
    })

    throw new NotFoundException({
      data,
      message: 'There is a not found error',
    })
  }
}
