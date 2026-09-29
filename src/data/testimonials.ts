export interface Testimonial {
  name: string;
  /** e.g. city or service type */
  detail?: string;
  text: string;
}

// TODO: add real customer testimonials. The testimonials section is hidden while this list is empty.
export const testimonials: Testimonial[] = [];
