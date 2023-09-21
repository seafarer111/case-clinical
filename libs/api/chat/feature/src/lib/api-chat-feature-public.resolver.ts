
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'
import { CorePaging } from '@case-clinical/api/core/data-access'
import {
  CtxUser,
} from '@case-clinical/api/auth/util'

import {
  ApiChatDataAccessPublicService,
  Chat,
} from '@case-clinical/api/chat/data-access'

import { User } from '@case-clinical/api/user/data-access'

@Resolver()
export class ApiChatFeaturePublicResolver {
  constructor(private readonly service: ApiChatDataAccessPublicService) {}
           
}

