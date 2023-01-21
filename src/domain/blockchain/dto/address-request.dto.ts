import { IsOptional, IsString } from 'class-validator'

export class AddressRequestDto {
  @IsString()
  address: string
}

export class AddressRequestQueryDto {
  @IsOptional()
  @IsString()
  network?: 'mainnet' | 'testnet'
}
