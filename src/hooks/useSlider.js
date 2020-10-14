import { useEffect, useState, useRef, useCallback } from 'react';

const useSlider = (delayTime, autoplayTime) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPause, setIsPause] = useState(false);

  const slider = useRef(null);
  const savedCallback = useRef(null);

  const delay = delayTime ? delayTime * 1000 : null;
  const autoplay = autoplayTime ? autoplayTime * 1000 : null;

  let sliderLength;

  const setPause = useCallback(() => {
    setIsPause(true);
    setTimeout(() => {
      setIsPause(false);
    }, autoplay);
  }, [setIsPause, autoplay]);

  const setSlide = useCallback(
    i => {
      setCurrentSlide(i);
      setPause();
    },
    [setPause]
  );

  const setNextSlide = useCallback(() => {
    currentSlide < sliderLength
      ? setCurrentSlide(currentSlide + 1)
      : setCurrentSlide(0);
  }, [currentSlide, sliderLength]);

  const nextSlide = useCallback(() => {
    setNextSlide();
    setPause();
  }, [setNextSlide, setPause]);

  const prevSlide = useCallback(() => {
    currentSlide < 1
      ? setCurrentSlide(sliderLength)
      : setCurrentSlide(currentSlide - 1);
    setPause();
  }, [currentSlide, setPause, sliderLength]);

  useEffect(() => {
    savedCallback.current = setNextSlide;
  }, [setNextSlide]);

  useEffect(() => {
    const counter = () => savedCallback.current();

    if (delay !== null && isPause !== true) {
      const id = setInterval(counter, delay);
      return () => clearInterval(id);
    }
  }, [delay, isPause]);

  useEffect(() => {
    sliderLength = slider.current.childElementCount - 1;
  });

  return { slider, currentSlide, nextSlide, prevSlide, setSlide };
};

export { useSlider };
