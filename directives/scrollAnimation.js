export const scrollAnimation = {
  mounted: (el, binding) => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('animate-fadeInUp', 'opacity-100');
          el.classList.remove('opacity-0', 'translate-y-10');
          observer.unobserve(el);
        }
      },
      {
        threshold: 0.1
      }
    );
    el.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-1000');
    observer.observe(el);
  }
};