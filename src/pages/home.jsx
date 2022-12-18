import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { ClockIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer, Carousel } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, sponsorData } from "@/data";

export function Home() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="lg-1 font-black"
              >
                TLE Hacks
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                February 24-26, 2023
                <br />
                Virtual
              </Typography>
              <a target="_blank"
                href="https://docs.google.com/forms/d/e/1FAIpQLSdFYToSBT1A7jTVzqTgRl4Z-oi9dqZsdp211Kv7sbfZ7iQZvg/viewform?usp=sf_link">
                <Button>Get Started</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-gray-900 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                <ClockIcon className="h-6 w-6 text-blue-gray-900" />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold text-blue-gray-50"
                color="blue-gray"
              >
                36-Hour Hackathon
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-100">
                TLE Hacks is a 36-hour virtual hackathon hosted by Pierre Elliott Trudeau High School.
                <br />
                <br />
                During the event, you will have the opportunity to learn new skills, meet new people, and build a project you'll be able to showcase.
              </Typography>
              <a target="_blank"
                href="https://docs.google.com/forms/d/e/1FAIpQLSdFYToSBT1A7jTVzqTgRl4Z-oi9dqZsdp211Kv7sbfZ7iQZvg/viewform?usp=sf_link">
                <Button variant="outlined">Get Started</Button>
              </a>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg shadow-gray-500/10">
                <CardHeader className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/img/teamwork.jpeg"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 font-bold"
                  >
                    Requirements
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    Only <b>high school students</b> eligible.
                    <br/>
                    You can work alone or in a team with <b>upto 6</b> members.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 pt-20 pb-48 bg-blue-gray-900">
        <div className="container mx-auto">
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg shadow-gray-500/10">
                <CardHeader className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/img/teamwork.jpeg"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 font-bold"
                  >
                    What is SHSM?
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    <a target="_blank" href="https://shsmpeths.ca/join">
                    <Button variant="outlined">Check out SHSM</Button></a>
                  </Typography>
                </CardBody>
              </Card>
            </div>
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <Typography
                variant="h3"
                className="mb-3 font-bold text-blue-gray-50"
                color="blue-gray"
              >
                From SHSM?
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-100">
                In order to earn a SHSM credit, you must either make a submission to the Hackathon or participate in at least one workshop.
              </Typography>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 pt-20 pb-48 bg-gray-900">
        <div className="container mx-auto text-blue-gray-50">
          <PageTitle heading="Our Team" color="white">
            Dedicated students from Pierre Elliott Trudeau High School
          </PageTitle>
          {/* <Carousel /> */}
          <Carousel teamData={teamData} />
            {/* {teamData.map(({ img, name, position, socials }) => (
              <TeamCard
              key={name}
              img={img}
              name={name}
              position={position}
              socials={
                <div className="flex items-center gap-2">
                  {socials.map(({ color, name }) => (
                    <IconButton key={name} color={color} variant="text">
                      <i className={`fa-brands text-lg fa-${name}`} />
                    </IconButton>
                  ))}
                </div>
              }
              />
            ))} */}
        </div>
      </section>
      <section className="relative bg-blue-gray-900 py-24 px-4">
        <div className="container mx-auto">
          <PageTitle heading="Sponsors">
          </PageTitle>
          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {sponsorData.map(({ sponsor, logo, description }) => (
              <Card
                key={sponsor}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-100"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-white shadow-lg shadow-gray-500/20">
                  <img src={logo} />
                  {/* {React.createElement(logo, {
                    className: "w-5 h-5",
                  })} */}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2 text-blue-gray-100">
                  {sponsor}
                </Typography>
                <Typography className="font-normal text-blue-gray-200">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
          <PageTitle heading="Want to sponsor us?">
            Complete this form and we will get back to you.
          </PageTitle>
          <form className="mx-auto mt-12 max-w-3xl text-center">
            <div className="mb-8 flex gap-8">
              <Input variant="standard" size="md" label="Representative Name" />
              <Input variant="standard" size="md" label="Company Name" />
              <Input variant="standard" size="md" label="Email Address" />
            </div>
            <Textarea variant="standard" size="lg" label="Message" rows={8} />
            <Button variant="gradient" size="lg" className="mt-8">
              Send Message
            </Button>
          </form>
        </div>
      </section>
      <div className="bg-blue-gray-900">
        <Footer />
      </div>
    </>
  );
}

export default Home;
