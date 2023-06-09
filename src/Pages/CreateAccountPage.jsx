import React from "react";
import Form from "../Components/UI/Form";
import Input from "../Components/UI/Input";
import FormGroup from "../Components/UI/FormGroup";
import Button from "../Components/UI/Button";
import UserIcon from "../Components/Icons/UserIcon";
import EmailIcon from "../Components/Icons/EmailIcon";
import PageHeader from "../Components/UI/PageHeader";
const CreateAccount = () => {
  return (
    <main className="md:h-screen lg:h-auto grid grid-cols-1 md:grid-cols-2">
      <div className="">
        <img
          src="/Assets/Images/CreateAcc-img.png"
          className="w-full h-full hidden md:block"
        />
        <img
          src="/Assets/Images/CreateAcc-Mobile.png"
          className="w-full h-full block md:hidden"
        />
      </div>
      <div className="p-8 lg:px-12 xl:px-20 flex flex-col justify-center md:py-0">
        <div className="">
          <PageHeader
            heading={"Create Account"}
            subheading="Welcome! Enter your details and start creating, collecting and selling NFTs"
          />

          <Form>
            <FormGroup className="overflow-hidden pl-8 rounded-full mb-4 flex items-center gap-0 bg-white">
              <label
                htmlFor="username"
                className="hidden">
                username
              </label>

              <UserIcon
                color="#3B3B3B"
                className="w-6 h-6 opacity-70"
              />
              <Input
                type="text"
                placeholder="Username"
                id="username"
              />
            </FormGroup>
            <FormGroup className="overflow-hidden pl-8 rounded-full mb-4 flex items-center gap-0 bg-white">
              <label
                htmlFor="email"
                className="hidden">
                email
              </label>
              <EmailIcon
                color="#3B3B3B"
                className="w-6 h-6 opacity-70"
              />
              <Input
                type="text"
                placeholder="Email Address"
                id="email"
              />
            </FormGroup>
            <FormGroup className="overflow-hidden pl-8 rounded-full mb-4 flex items-center gap-0 bg-white">
              <label
                htmlFor="password"
                className="hidden">
                password
              </label>
              <img
                src="./Assets/Icons/LockKey.svg"
                className="w-6 h-6 opacity-70"
              />
              <Input
                type="text"
                placeholder="Password"
                id="password"
              />
            </FormGroup>
            <FormGroup className="overflow-hidden pl-8 rounded-full mb-8 flex items-center gap-0 bg-white">
              <label
                htmlFor="confirm"
                className="hidden">
                confirm
              </label>
              <img
                src="./Assets/Icons/LockKey.svg"
                className="w-6 h-6 opacity-70"
              />
              <Input
                type="text"
                placeholder="Confirm Password"
                id="confirm"
              />
            </FormGroup>
            <Button
              className="rounded-full focus:border-[2px] focus:border-white justify-center"
              filled={true}>
              Create Account
            </Button>
          </Form>
        </div>
      </div>
    </main>
  );
};

export default CreateAccount;
