import { gql } from "@apollo/client";

export const SIGN_IN = gql`
  mutation signIn($signInInput: SignInInput!) {
    signIn(signInInput: $signInInput) {
      accessToken
    }
  }
`