import {
  Divider,
  Grid,
  TextField,
  Typography,
  Button,
  Container,
  Modal,
} from "@mui/material";
import GstDetails from "./GstDetails";
import BillingDetails from "./BillingDetails";
import { Formik, Form, Field } from "formik";
import { Box } from "@mui/system";
import { useState } from "react";

const DeliveryAddress = () => {
  const [data, setData] = useState();
  const [success, setSuccess] = useState(false);

  return (
    <div>
      <Formik
        initialValues={{
          contactDetails: {
            mobileNumber: "",
            firstName: "",
            lastName: "",
            email: "",
          },
          deliveryAddress: {
            contactName: "",
            flatNumber: "",
            floorNumber: "",
            blockNumber: "",
            apartmentName: "",
            address: "",
            street: "",
            landmark: "",
            pincode: "",
            city: "",
            state: "",
          },
        }}
        //   onSubmit={(data) => console.log(data)}
        onSubmit={(e) => {
          setData(e);
          setSuccess(true);
          console.log(data, success);
        }}
      >
        <Form>
          <Container maxWidth="sm">
            <Grid container  spacing={3}>
              <Grid xs={12} item>
                <Field
                  as={TextField}
                  name="contactDetails.mobileNumber"
                  placeholder="Enter Mobile Number "
                  label="Mobile Number"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <Field
                  as={TextField}
                  name="contactDetails.firstName"
                  placeholder="Enter First name"
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <Field
                  as={TextField}
                  name="contactDetails.lastName"
                  placeholder="Enter Last name"
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  name="contactDetails.email"
                  type={"email"}
                  placeholder="Enter Email Id"
                  label="Email Id"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6">Delivery Address</Typography>
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  name="deliveryAddress.contactName"
                  placeholder="Enter Contact Name"
                  label="Contact Name"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  name="deliveryAddress.flatNumber"
                  placeholder="Enter "
                  label="Flat/House No"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  name="deliveryAddress.floorNumber"
                  type={"number"}
                  placeholder="Enter "
                  label="Floor No/Plot No"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  name="deliveryAddress.blockNumber"
                  type={"number"}
                  placeholder="Enter "
                  label="Block No"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  name="deliveryAddress.apartmentName"
                  placeholder="Enter "
                  label="Building/Apartment Name"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  name="deliveryAddress.address"
                  placeholder="Enter "
                  label="Address"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  name="deliveryAddress.street"
                  placeholder="Enter "
                  label="Street"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  name="deliveryAddress.landmark"
                  placeholder="Enter "
                  label="Landmark"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  name="deliveryAddress.pincode"
                  type={"number"}
                  placeholder="Enter "
                  label="Pincode"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  name="deliveryAddress.city"
                  placeholder="Enter "
                  label="City"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  name="deliveryAddress.state"
                  placeholder="Enter "
                  label="State"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
            </Grid>
          </Container>
          <Container maxWidth="sm">
            <Grid item xs={12}>
              <GstDetails />
            </Grid>
          </Container>
          <Container maxWidth="sm">
            <Grid item xs={12}>
              <BillingDetails />
            </Grid>
          </Container>
          <Container maxWidth="sm">
            <Grid item xs={12}>
              <Button variant="contained" type="submit">
                Proceed
              </Button>
            </Grid>
            {/* {success === true && (
              <Modal open={success}>
                  <Typography variant="h6" component="h2">
                    Success
                  </Typography>
              </Modal>
            )} */}
          </Container>
        </Form>
      </Formik>
    </div>
  );
};
export default DeliveryAddress;
