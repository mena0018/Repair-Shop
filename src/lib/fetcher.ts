import * as Sentry from '@sentry/nextjs';
import { toast } from 'sonner';

const displayError = (error: string): never => {
  toast.error(error);
  throw error;
};

export async function fetcherWithToastError<T>(
  fetcher: () => Promise<T>,
  errorMessage = 'ERROR',
): Promise<T> {
  try {
    return await fetcher();
  } catch (error) {
    console.error(error);

    if (error instanceof Error) {
      Sentry.captureException(error);
      return displayError(`${errorMessage} ${error.message}`);
    }
    return displayError(`${errorMessage} ${String(error)}`);
  }
}
