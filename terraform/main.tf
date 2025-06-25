terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.67" # Known good with LocalStack
    }
  }
}

provider "aws" {
  access_key                  = "test"
  secret_key                  = "test"
  region                      = "us-east-1"
  skip_credentials_validation = true
  skip_requesting_account_id  = true
  skip_metadata_api_check     = true

  endpoints {
    ec2 = "http://localhost:4566"
  }
}

resource "aws_instance" "blocksecurepay_backend" {
  ami           = "ami-0c55b159cbfafe1f0" # Dummy AMI (not actually launched)
  instance_type = "t2.micro"

  tags = {
    Name = "blocksecurepay-backend"
  }
}
