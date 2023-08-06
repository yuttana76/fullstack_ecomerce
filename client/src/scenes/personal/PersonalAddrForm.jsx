import { Typography } from "@mui/material";
import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import "./personal.css";

const PersonalAddrForm = (addressData) => {
  const schema: ZodType = z.object({
    addr1: z.string().min(2).max(100),
    addr2: z.string().min(2).max(100),
    city: z.string().min(2).max(100),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: addressData,
  });

  console.log("[+]addressData:", addressData);
  return (
    <div>
      <Typography variant="h3">Address Form</Typography>
    </div>
  );
};

export default PersonalAddrForm;
