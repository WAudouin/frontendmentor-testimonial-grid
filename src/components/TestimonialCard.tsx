import { Testimonial, variantStyles } from "../data";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  const styles = variantStyles[testimonial.variant];
  return (
    <article
      className={`p-8 ${testimonial.grid_classes} text-left ${styles.background} flex flex-col gap-4 rounded-lg shadow-2xl/40`}
    >
      <section className="flex gap-4 items-center">
        <img
          className="rounded-4xl object-cover w-8 h-8"
          src={testimonial.user.profile_picture}
        />
        <section className={`flex flex-col gap-1`}>
          <p
            className={`text-xs ${
              testimonial.variant === "light" ? "text-grey-500" : "text-white"
            }`}
          >
            {testimonial.user.name}
          </p>
          <p
            className={`text-[10px] ${
              testimonial.variant === "light"
                ? "text-grey-400"
                : "text-grey-100"
            }`}
          >
            {testimonial.user.role}
          </p>
        </section>
      </section>
      <p className={`font-semibold text-xl ${styles.title}`}>
        {testimonial.title}
      </p>
      <span className={`text-sm ${styles.text}`}>
        {"“ "}
        {testimonial.content}
        {" “"}
      </span>
    </article>
  );
};

export default TestimonialCard;
