import { useEffect, useState, useRef, useCallback } from 'react';

const useSlider = (delayTime = 0, autoplayTime = 0) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderLength, setSliderLength] = useState(0);
  const [isPause, setIsPause] = useState(false);

  const slider = useRef(null);
  const savedCallback = useRef(null);

  const delay = delayTime * 1000;

  const setPause = useCallback(() => {
    setIsPause(true);
    setTimeout(() => {
      setIsPause(false);
    }, autoplayTime * 1000);
  }, [setIsPause, autoplayTime]);

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

    if (delay > 0 && isPause !== true) {
      const id = setInterval(counter, delay);
      return () => clearInterval(id);
    }
  }, [delay, isPause]);

  useEffect(() => {
    if (slider.current == null) {
      throw new Error(
        'You need to add a slider reference: ref={slider} to your slider wrapper. '
      );
    }

    setSliderLength(slider.current.childElementCount - 1);
  }, [sliderLength]);

  return { slider, currentSlide, nextSlide, prevSlide, setSlide, setIsPause };
};

export { useSlider };
