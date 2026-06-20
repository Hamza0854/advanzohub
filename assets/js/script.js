const hdr = document.getElementById('hdr');
const onScroll = () => hdr.classList.toggle('scrolled', window.scrollY > 24);
onScroll();
window.addEventListener('scroll', onScroll);
const io = new IntersectionObserver((es) => {
   es.forEach(e => {
      if (e.isIntersecting) {
         e.target.classList.add('in');
         io.unobserve(e.target);
      }
   });
}, {
   threshold: 0.12
});
document.querySelectorAll('.reveal').forEach((el, i) => {
   el.style.transitionDelay = (i % 3 * 80) + 'ms';
   io.observe(el);
});