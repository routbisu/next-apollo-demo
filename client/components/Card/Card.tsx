import React from 'react'
import { User } from '../../types/User'
import {
  CardContent,
  CardWrapper,
  UserAddress,
  UserEmail,
  UserName,
  UserPhone
} from './Card.styles'

type CardProps = Omit<User, 'id'> & {
  isLoading?: boolean
}

const Card: React.FC<CardProps> = ({
  name,
  phone,
  email,
  address,
  ...rest
}) => {
  return (
    <CardWrapper {...rest}>
      <CardContent>
        <UserName data-testid="name">{name}</UserName>
        <div>
          <UserPhone data-testid="phone" href={`tel:${phone}`}>
            {phone}
          </UserPhone>
        </div>
        <div>
          <UserEmail data-testid="email" href={`mailto:${email}`}>
            {email}
          </UserEmail>{' '}
        </div>
        <UserAddress data-testid="address">{address}</UserAddress>
      </CardContent>
    </CardWrapper>
  )
}

export default Card
