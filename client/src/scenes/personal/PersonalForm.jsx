import { Typography } from "@mui/material";
import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import "./personal.css";

const PersonalForm = (props) => {
  const schema: ZodType = z.object({
    firstName: z.string().min(2).max(30),
    lastName: z.string().min(2).max(30),
    email: z.string().email(),
  });

  // const schema: ZodType = z
  //   .object({
  //     firstName: z.string().min(2).max(30),
  //     lastName: z.string().min(2).max(30),
  //     email: z.string().email(),
  //     age: z.number().min(18).max(70),
  //     password: z.string().min(5).max(20),
  //     confirmPassword: z.string().min(5).max(20),
  //   })
  //   .refine((data) => data.password === data.confirmPassword, {
  //     message: "Passwords do not match",
  //     path: ["confirmPassword"],
  //   });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: props.personData,
  });

  // const submitData = (data) => {
  //   console.log("IT WORKED", data);
  // };

  return (
    <div className="container">
      <div className="row">
        <div className="column">
          <div className="left-half">
            <Typography variant="h3">Personal Form</Typography>
            <form onSubmit={handleSubmit(props.personFormSubmited)}>
              <p className="input-label">First Name </p>
              <input
                className="input"
                type="text"
                placeholder="Name"
                {...register("firstName")}
              />
              {errors.firstName && (
                <span className="error"> {errors.firstName.message}</span>
              )}

              <p className="input-label">Last Name </p>
              <input
                className="input"
                type="text"
                placeholder="Last Name"
                {...register("lastName")}
              />
              {errors.lastName && (
                <span className="error"> {errors.lastName.message}</span>
              )}

              <p className="input-label">Email </p>
              <input
                className="input"
                type="text"
                placeholder="Email"
                {...register("email")}
              />
              {errors.email && (
                <span className="error"> {errors.email.message}</span>
              )}

              <p className="input-label">Age </p>
              <input
                className="input"
                type="number"
                placeholder="Age"
                {...register("age", { valueAsNumber: true })}
              />
              {errors.age && (
                <span className="error"> {errors.age.message}</span>
              )}

              <input type="submit" />
            </form>
          </div>
        </div>

        <div className="column"></div>
      </div>
    </div>
  );
};

export default PersonalForm;
