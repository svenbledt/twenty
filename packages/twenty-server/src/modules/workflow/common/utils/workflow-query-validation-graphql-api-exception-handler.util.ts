import { assertUnreachable } from 'twenty-shared/utils';

import { ForbiddenError } from 'src/engine/core-modules/graphql/utils/graphql-errors.util';
import {
  type WorkflowQueryValidationException,
  WorkflowQueryValidationExceptionCode,
} from 'src/modules/workflow/common/exceptions/workflow-query-validation.exception';

export const workflowQueryValidationGraphqlApiExceptionHandler = (
  error: WorkflowQueryValidationException,
) => {
  switch (error.code) {
    case WorkflowQueryValidationExceptionCode.FORBIDDEN:
      throw new ForbiddenError(error);
    default: {
      return assertUnreachable(error.code);
    }
  }
};
