import { InputField, SubmitButton, TextArea } from "@/components/Form";
import { BodyText, SubTitle, Title } from "@/components/Typography";
import Wrapper from "@/components/Wrapper";

export default function Contact() {
  return (
    <>
      {/* Contact Form Section */}
      <Wrapper>
        <section className="py-10 xl:py-16 flex flex-col xl:flex-row">
          <div className=" bg-white rounded-xl p-8 flex-1 mr-2">
            <Title>Get in touch with me today</Title>
            <BodyText>
              Lorem ipsum dolor sit amet consectetur adipiscing elit nulla
              adipiscing tincidunt interdum tellus du.
            </BodyText>
            <div className="w-full h-80 bg-blue-400 mt-10"></div>
          </div>

          <div className="flex-1 w-full mx-auto xl:mx-0 max-w-2xl shadow-lg rounded-xl md:p-10 p-8 bg-white lg:my-0">
            <form className="shadow-black rounded-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pb-8">
                <InputField fieldName="Name" placeholder="John Doe" />
                <InputField fieldName="Email" placeholder="Johndoe.com" />
                <InputField
                  fieldName="Phone (Optional)"
                  placeholder="(123) 456-7891"
                />
              </div>
              <TextArea fieldName="Message" />
              <div className="pt-5">
                <SubmitButton text="Submit Message" />
              </div>
            </form>
          </div>
        </section>
      </Wrapper>
    </>
  );
}
