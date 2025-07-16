import { CircleCheck, TriangleAlert } from 'lucide-react';
import { Fragment, ReactNode } from 'react';

const MessageBox = ({ type, content }: { type: 'success' | 'error'; content: ReactNode }) => {
  if (type === 'error') {
    return (
      <div className='animate-slide bg-destructive/20 flex items-center gap-2 rounded-md px-4 py-2 break-all'>
        <TriangleAlert
          size={18}
          color='var(--destructive)'
        />
        <p className='text-destructive'>{content}</p>
      </div>
    );
  }

  return (
    <div className='animate-slide bg-positive/20 flex items-center gap-2 rounded-md px-4 py-2 break-all'>
      <CircleCheck
        size={18}
        color='var(--positive)'
      />
      <p className='text-positive'>{content}</p>
    </div>
  );
};

type Props = {
  result: {
    data?: {
      message?: string;
      error?: boolean;
    };
    serverError?: string;
    validationErrors?: Record<string, string[] | undefined>;
  };
};

export function AlertServerResponse({ result }: Props) {
  const { data, serverError, validationErrors } = result;

  if (data?.error) {
    return (
      <MessageBox
        type='error'
        content={data.message}
      />
    );
  }

  return (
    <Fragment>
      {data?.message && (
        <MessageBox
          type='success'
          content={data.message}
        />
      )}

      {serverError && (
        <MessageBox
          type='error'
          content={serverError}
        />
      )}

      {validationErrors && (
        <MessageBox
          type='error'
          content={Object.keys(validationErrors).map((key) => (
            <p key={key}>{`${key}: ${validationErrors[key as keyof typeof validationErrors]}`}</p>
          ))}
        />
      )}
    </Fragment>
  );
}
