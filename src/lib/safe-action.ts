import * as Sentry from '@sentry/nextjs';
import { createSafeActionClient } from 'next-safe-action';
import { z } from 'zod';

export const actionClient = createSafeActionClient({
  defineMetadataSchema() {
    return z.object({
      actionName: z.string(),
    });
  },
  handleServerError(error, utils) {
    const { clientInput, metadata } = utils;

    Sentry.captureException(error, (scope) => {
      scope.clear();
      scope.setContext('serverError', { message: error.message });
      scope.setContext('metadata', { actionName: metadata.actionName });
      scope.setContext('clientInput', { clientInput });
      return scope;
    });

    // We don't want to leak any sensitive data
    if (error.constructor.name === 'DatabaseError') {
      return 'Database Error: Your data did not save. Support will be notified.';
    }

    console.error('Action error:', error.message);
    return error.message;
  },
  defaultValidationErrorsShape: 'flattened',
});
