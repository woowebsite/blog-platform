import component from './SliderTwo';

export default {
  componentName: 'SliderTwo',
  dataSource: {
    slides: [
      {
        textPosition: 'text-center',
        bgImage: 'bg_image--15',
        category: '',
        title: 'Marketing2',
        description:
          'There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.',
        buttonText: 'Contact Us',
        buttonLink: '/contact-us',
      },
      {
        textPosition: 'text-center',
        bgImage: 'bg_image--12',
        category: '',
        title: 'Development.',
        description:
          'There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.',
        buttonText: 'Contact Us',
        buttonLink: '/blog',
      },
      {
        textPosition: 'text-center',
        bgImage: 'bg_image--13',
        category: '',
        title: 'UX Research.',
        description:
          'There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.',
        buttonText: 'Contact Us',
        buttonLink: '/blog',
      },
    ],
  },
};
