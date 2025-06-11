import { useRef, useEffect } from 'react'

// Custom Hook: Auto Scroll
export function useAutoScroll(dependencies) {
  // inital value is null
  const chatMessagesRef = useRef(null);


  useEffect(() => {
    const containerElement = chatMessagesRef.current;
    if (containerElement != null) {
      // scroll to the bottom (motion upward), all the way to its height
      containerElement.scrollTop = containerElement.scrollHeight;
    }
  }, dependencies);

  return chatMessagesRef;
}