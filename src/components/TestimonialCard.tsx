import QuotationIcon from "../assets/bg-pattern-quotation.svg";
import { Testimonial, variantStyles } from "../data";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  const styles = variantStyles[testimonial.variant];
  return (
    <article
      className={`p-8 ${testimonial.grid_classes} text-left ${styles.background} relative flex flex-col gap-4 rounded-lg shadow-2xl/40`}
    >
      <section className="flex gap-4 items-center">
        {testimonial.variant === "purple" && (
          <img
            alt="Quotation"
            className="absolute right-15 top-1"
            src={QuotationIcon}
          />
        )}
        <img
          className="rounded-4xl object-cover w-8 h-8"
          src={testimonial.user.profile_picture}
          alt={`${testimonial.user.name}`}
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
      <p className={`font-semibold text-xl z-10 ${styles.title}`}>
        {testimonial.title}
      </p>
      <span className={`text-[13px] ${styles.text}`}>
        {"“ "}
        {testimonial.content}
        {" “"}
      </span>
    </article>
  );
};

export default TestimonialCard;
