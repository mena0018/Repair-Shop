import { BackButton } from '@/components/back-button';

type ErrorDisplayProps = {
  label: string;
  id?: string;
};

export const ErrorDisplay = ({ label, id }: ErrorDisplayProps) => {
  return (
    <div className='space-y-4 py-6'>
      <h2 className='text-2xl'>
        {label} {id ? `#${id}` : null}
      </h2>
      <BackButton />
    </div>
  );
};
