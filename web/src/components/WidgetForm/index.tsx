import { useState } from 'react';
import bugImage from '../../assets/bug.svg';
import ideaImage from '../../assets/idea.svg';
import thoughtImage from '../../assets/thought.svg';
import { FeedbackContentStep } from '../Steps/FeedbackContentStep';
import { FeedbackSuccessStep } from '../Steps/FeedbackSuccessStep';
import { FeedbackTypeStep } from '../Steps/FeedbackTypeStep';

export const feedbackTypes = {
  BUG: {
    title: 'Problem',
    image: {
      source: bugImage,
      alt: 'Bug image',
    },
  },
  IDEA: {
    title: 'Idea',
    image: {
      source: ideaImage,
      alt: 'Idea Image',
    },
  },
  OTHER: {
    title: 'Other',
    image: {
      source: thoughtImage,
      alt: 'Thought image',
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackType(null);
    setFeedbackSent(false);
  }

  return (
    <div className='bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto'>
      {feedbackSent ? (
        <FeedbackSuccessStep
          onFeedbackRestartRequested={handleRestartFeedback}
        />
      ) : (
        <>
          {!feedbackType ? (
            <>
              <header>Leave us your Feedback</header>
              <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
            </>
          ) : (
            <FeedbackContentStep
              onFeedbackSent={() => setFeedbackSent(true)}
              onFeedbackRestartRequested={handleRestartFeedback}
              type={feedbackType}
            />
          )}
        </>
      )}

      <footer className='text-xs text-neutral-400'>
        Made with ♥ by {''}
        <a
          className='underline underline-offset-2'
          href='https://sesisnando-portifolio.vercel.app/'
        >
          Sesisnando
        </a>
      </footer>
    </div>
  );
}
