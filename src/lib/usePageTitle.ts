import { useEffect } from 'react';

export function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} | LumosX` : 'LumosX: Space Science Learning Platform';
  }, [title]);
}
