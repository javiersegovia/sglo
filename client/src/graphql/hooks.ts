import * as Types from './schema'

import {
  useMutation,
  UseMutationOptions,
  useQuery,
  UseQueryOptions,
} from 'react-query'
import { gqlFetcher } from 'src/lib/react-query/client'

export const ChangePasswordDocument = `
    mutation changePassword($data: ResetPasswordInput!) {
  resetPassword(data: $data)
}
    `
export const useChangePasswordMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    Types.ChangePasswordMutation,
    TError,
    Types.ChangePasswordMutationVariables,
    TContext
  >
) =>
  useMutation<
    Types.ChangePasswordMutation,
    TError,
    Types.ChangePasswordMutationVariables,
    TContext
  >(
    (variables?: Types.ChangePasswordMutationVariables) =>
      gqlFetcher<
        Types.ChangePasswordMutation,
        Types.ChangePasswordMutationVariables
      >(ChangePasswordDocument, variables)(),
    options
  )
export const CreateCompanyDocument = `
    mutation createCompany($data: CreateCompanyInput!) {
  createCompany(data: $data) {
    id
  }
}
    `
export const useCreateCompanyMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    Types.CreateCompanyMutation,
    TError,
    Types.CreateCompanyMutationVariables,
    TContext
  >
) =>
  useMutation<
    Types.CreateCompanyMutation,
    TError,
    Types.CreateCompanyMutationVariables,
    TContext
  >(
    (variables?: Types.CreateCompanyMutationVariables) =>
      gqlFetcher<
        Types.CreateCompanyMutation,
        Types.CreateCompanyMutationVariables
      >(CreateCompanyDocument, variables)(),
    options
  )
export const RequestConfirmationEmailDocument = `
    mutation requestConfirmationEmail($email: String!) {
  resendVerificationEmail(email: $email)
}
    `
export const useRequestConfirmationEmailMutation = <
  TError = unknown,
  TContext = unknown
>(
  options?: UseMutationOptions<
    Types.RequestConfirmationEmailMutation,
    TError,
    Types.RequestConfirmationEmailMutationVariables,
    TContext
  >
) =>
  useMutation<
    Types.RequestConfirmationEmailMutation,
    TError,
    Types.RequestConfirmationEmailMutationVariables,
    TContext
  >(
    (variables?: Types.RequestConfirmationEmailMutationVariables) =>
      gqlFetcher<
        Types.RequestConfirmationEmailMutation,
        Types.RequestConfirmationEmailMutationVariables
      >(RequestConfirmationEmailDocument, variables)(),
    options
  )
export const RequestPasswordDocument = `
    mutation requestPassword($email: String!) {
  requestResetPassword(email: $email)
}
    `
export const useRequestPasswordMutation = <
  TError = unknown,
  TContext = unknown
>(
  options?: UseMutationOptions<
    Types.RequestPasswordMutation,
    TError,
    Types.RequestPasswordMutationVariables,
    TContext
  >
) =>
  useMutation<
    Types.RequestPasswordMutation,
    TError,
    Types.RequestPasswordMutationVariables,
    TContext
  >(
    (variables?: Types.RequestPasswordMutationVariables) =>
      gqlFetcher<
        Types.RequestPasswordMutation,
        Types.RequestPasswordMutationVariables
      >(RequestPasswordDocument, variables)(),
    options
  )
export const SignInDocument = `
    mutation signIn($data: SignInInput!) {
  login(data: $data) {
    id
    information {
      id
    }
  }
}
    `
export const useSignInMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    Types.SignInMutation,
    TError,
    Types.SignInMutationVariables,
    TContext
  >
) =>
  useMutation<
    Types.SignInMutation,
    TError,
    Types.SignInMutationVariables,
    TContext
  >(
    (variables?: Types.SignInMutationVariables) =>
      gqlFetcher<Types.SignInMutation, Types.SignInMutationVariables>(
        SignInDocument,
        variables
      )(),
    options
  )
export const SignOutDocument = `
    mutation signOut {
  logout
}
    `
export const useSignOutMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    Types.SignOutMutation,
    TError,
    Types.SignOutMutationVariables,
    TContext
  >
) =>
  useMutation<
    Types.SignOutMutation,
    TError,
    Types.SignOutMutationVariables,
    TContext
  >(
    (variables?: Types.SignOutMutationVariables) =>
      gqlFetcher<Types.SignOutMutation, Types.SignOutMutationVariables>(
        SignOutDocument,
        variables
      )(),
    options
  )
export const SignUpDocument = `
    mutation signUp($data: SignupInput!) {
  register(data: $data)
}
    `
export const useSignUpMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    Types.SignUpMutation,
    TError,
    Types.SignUpMutationVariables,
    TContext
  >
) =>
  useMutation<
    Types.SignUpMutation,
    TError,
    Types.SignUpMutationVariables,
    TContext
  >(
    (variables?: Types.SignUpMutationVariables) =>
      gqlFetcher<Types.SignUpMutation, Types.SignUpMutationVariables>(
        SignUpDocument,
        variables
      )(),
    options
  )
export const UpdateCurrentUserDocument = `
    mutation updateCurrentUser($data: UpdateUserInput!) {
  updateCurrentUser(data: $data)
}
    `
export const useUpdateCurrentUserMutation = <
  TError = unknown,
  TContext = unknown
>(
  options?: UseMutationOptions<
    Types.UpdateCurrentUserMutation,
    TError,
    Types.UpdateCurrentUserMutationVariables,
    TContext
  >
) =>
  useMutation<
    Types.UpdateCurrentUserMutation,
    TError,
    Types.UpdateCurrentUserMutationVariables,
    TContext
  >(
    (variables?: Types.UpdateCurrentUserMutationVariables) =>
      gqlFetcher<
        Types.UpdateCurrentUserMutation,
        Types.UpdateCurrentUserMutationVariables
      >(UpdateCurrentUserDocument, variables)(),
    options
  )
export const VerifyEmailDocument = `
    mutation verifyEmail($token: String!) {
  verifyEmail(token: $token)
}
    `
export const useVerifyEmailMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    Types.VerifyEmailMutation,
    TError,
    Types.VerifyEmailMutationVariables,
    TContext
  >
) =>
  useMutation<
    Types.VerifyEmailMutation,
    TError,
    Types.VerifyEmailMutationVariables,
    TContext
  >(
    (variables?: Types.VerifyEmailMutationVariables) =>
      gqlFetcher<Types.VerifyEmailMutation, Types.VerifyEmailMutationVariables>(
        VerifyEmailDocument,
        variables
      )(),
    options
  )
export const CategoriesDocument = `
    query categories {
  categories {
    id
    name
  }
}
    `
export const useCategoriesQuery = <
  TData = Types.CategoriesQuery,
  TError = unknown
>(
  variables?: Types.CategoriesQueryVariables,
  options?: UseQueryOptions<Types.CategoriesQuery, TError, TData>
) =>
  useQuery<Types.CategoriesQuery, TError, TData>(
    ['categories', variables],
    gqlFetcher<Types.CategoriesQuery, Types.CategoriesQueryVariables>(
      CategoriesDocument,
      variables
    ),
    options
  )
export const CompaniesDocument = `
    query companies {
  companies {
    id
    name
    members {
      id
      roles
      user {
        email
      }
    }
  }
}
    `
export const useCompaniesQuery = <
  TData = Types.CompaniesQuery,
  TError = unknown
>(
  variables?: Types.CompaniesQueryVariables,
  options?: UseQueryOptions<Types.CompaniesQuery, TError, TData>
) =>
  useQuery<Types.CompaniesQuery, TError, TData>(
    ['companies', variables],
    gqlFetcher<Types.CompaniesQuery, Types.CompaniesQueryVariables>(
      CompaniesDocument,
      variables
    ),
    options
  )
export const CountriesDocument = `
    query countries {
  countries {
    id
    name
    flag
  }
}
    `
export const useCountriesQuery = <
  TData = Types.CountriesQuery,
  TError = unknown
>(
  variables?: Types.CountriesQueryVariables,
  options?: UseQueryOptions<Types.CountriesQuery, TError, TData>
) =>
  useQuery<Types.CountriesQuery, TError, TData>(
    ['countries', variables],
    gqlFetcher<Types.CountriesQuery, Types.CountriesQueryVariables>(
      CountriesDocument,
      variables
    ),
    options
  )
export const CurrentUserDocument = `
    query currentUser {
  currentUser {
    id
    email
    firstName
    lastName
    verification {
      verifiedEmail
    }
    companyMember {
      roles
      company {
        id
        name
      }
    }
  }
}
    `
export const useCurrentUserQuery = <
  TData = Types.CurrentUserQuery,
  TError = unknown
>(
  variables?: Types.CurrentUserQueryVariables,
  options?: UseQueryOptions<Types.CurrentUserQuery, TError, TData>
) =>
  useQuery<Types.CurrentUserQuery, TError, TData>(
    ['currentUser', variables],
    gqlFetcher<Types.CurrentUserQuery, Types.CurrentUserQueryVariables>(
      CurrentUserDocument,
      variables
    ),
    options
  )
export const CurrentUserProfileDataDocument = `
    query currentUserProfileData {
  currentUser {
    id
    email
    firstName
    lastName
    information {
      gender
      birthDate
      nationality {
        id
      }
      occupation
      address {
        country {
          id
          name
        }
        description
        postalCode
      }
    }
  }
  countries {
    id
    name
  }
}
    `
export const useCurrentUserProfileDataQuery = <
  TData = Types.CurrentUserProfileDataQuery,
  TError = unknown
>(
  variables?: Types.CurrentUserProfileDataQueryVariables,
  options?: UseQueryOptions<Types.CurrentUserProfileDataQuery, TError, TData>
) =>
  useQuery<Types.CurrentUserProfileDataQuery, TError, TData>(
    ['currentUserProfileData', variables],
    gqlFetcher<
      Types.CurrentUserProfileDataQuery,
      Types.CurrentUserProfileDataQueryVariables
    >(CurrentUserProfileDataDocument, variables),
    options
  )
export const ProductStatusesDocument = `
    query productStatuses {
  productStatuses
}
    `
export const useProductStatusesQuery = <
  TData = Types.ProductStatusesQuery,
  TError = unknown
>(
  variables?: Types.ProductStatusesQueryVariables,
  options?: UseQueryOptions<Types.ProductStatusesQuery, TError, TData>
) =>
  useQuery<Types.ProductStatusesQuery, TError, TData>(
    ['productStatuses', variables],
    gqlFetcher<Types.ProductStatusesQuery, Types.ProductStatusesQueryVariables>(
      ProductStatusesDocument,
      variables
    ),
    options
  )
export const UsersDocument = `
    query users {
  users {
    id
    email
    firstName
    lastName
  }
}
    `
export const useUsersQuery = <TData = Types.UsersQuery, TError = unknown>(
  variables?: Types.UsersQueryVariables,
  options?: UseQueryOptions<Types.UsersQuery, TError, TData>
) =>
  useQuery<Types.UsersQuery, TError, TData>(
    ['users', variables],
    gqlFetcher<Types.UsersQuery, Types.UsersQueryVariables>(
      UsersDocument,
      variables
    ),
    options
  )
