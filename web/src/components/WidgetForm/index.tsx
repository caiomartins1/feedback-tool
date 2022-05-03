import { useState } from 'react';

import { CloseButton } from '../CloseButton';

import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep';
import { FeedbackContentStep } from './Steps/FeedbackContentStep';
import { FeedbackSuccessStep } from './Steps/FeedbackSuccessStep';

export const feedbackTypes = {
  BUG: {
    title: 'Problem',
    image: {
      src: bugImageUrl,
      alt: 'Bug image',
    },
  },
  IDEA: {
    title: 'Idea',
    image: {
      src: ideaImageUrl,
      alt: 'Light image',
    },
  },
  OTHER: {
    title: 'Other',
    image: {
      src: thoughtImageUrl,
      alt: 'Question mark image',
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleFeedbackReset() {
    setFeedbackSent(false);
    setFeedbackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] sm:w-auto">
      {feedbackSent ? (
        <FeedbackSuccessStep onFeedbackReset={handleFeedbackReset} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChange={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedbackReset={handleFeedbackReset}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}

      <footer className="text-xs text-neutral-400">
        Made with 💜 by{' '}
        <a
          className="underline underline-offset-1"
          href="https://github.com/caiomartins1"
          target="_blank"
        >
          Caio Martins
        </a>
      </footer>
    </div>
  );
}
