import { formInitials } from "../../utils/formInitials";
import { formSchema } from "../../utils/formSchema";
import toast from "react-hot-toast";
import { Formik, Field, Form, ErrorMessage } from "formik";
import ActionButtons from "../ActionButtons/ActionButtons";
import styles from "./Booking.module.css";

function Booking() {
  return (
    <Formik
      initialValues={formInitials}
      onSubmit={() => toast.success("Successfully booked!")}
      validationSchema={formSchema}
    >
      <Form className={styles.form}>
        <Field
          id="name"
          name="name"
          placeholder="Name*"
          className={styles.input}
        />
        <ErrorMessage name="name" component="p" className={styles.error} />

        <Field
          id="email"
          name="email"
          type="email"
          placeholder="Email*"
          className={styles.input}
        />
        <ErrorMessage name="email" component="p" className={styles.error} />

        <Field
          name="bookingDate"
          id="bookingDate"
          type="date"
          className={styles.input}
        />
        <ErrorMessage name="bookingDate" component="p" className={styles.error} />

        <Field
          as="textarea"
          id="comment"
          name="comment"
          placeholder="Comment"
          className={styles.textarea}
        />
        <ErrorMessage name="comment" component="p" className={styles.error} />

        <div className={styles.buttonWrapper}>
          <ActionButtons text="Send" cssClass="bg-[#E44848] text-white" />
        </div>
      </Form>
    </Formik>
  );
}

export default Booking;
