"use client";

import styles from "./ContactSection.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { Overpass } from "next/font/google";
import { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm, SubmitHandler } from "react-hook-form";
const overpass = Overpass({ subsets: ["latin"] });

const playfairDisplay = Playfair_Display({ subsets: ["latin"] });

export default function ContactSection() {
  const reRef = useRef();
  const SITE_KEY = "6Lflda4oAAAAAMpkogNzUa_vgDmdGggT6pC81Pxe";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function submit(data) {
    console.log("Submitting...");
    console.log(data);

    const token = await reRef.current.getValue();

    const body = { ...data, token };

    console.log(body);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const ret = await response.json();

    console.log(ret);
  }

  return (
    <section>
      <div className="container">
        <div className={styles.card}>
          <form className={styles.contactForm} onSubmit={handleSubmit(submit)}>
            <h3 className={playfairDisplay.className}>Your Contact Details.</h3>
            <p>Full Name</p>
            <div className={styles.name}>
              <div className={styles.firstName}>
                <span>First Name</span>
                <input
                  {...register("firstName", { required: true })}
                  type="text"
                />
                {errors.firstName?.type === "required" && (
                  <p className={styles.required} role="alert">
                    First name is required
                  </p>
                )}
              </div>

              <div className={styles.lastName}>
                <span>Last Name</span>
                <input
                  {...register("lastName", { required: true })}
                  type="text"
                />
                {errors.lastName?.type === "required" && (
                  <p className={styles.required} role="alert">
                    Last name is required
                  </p>
                )}
              </div>
            </div>

            <div className={styles.email}>
              <p>Email Address</p>
              <input {...register("email", { required: true })} type="text" />
              {errors.email?.type === "required" && (
                <p className={styles.required} role="alert">
                  Email Address is required
                </p>
              )}
            </div>

            <div className={styles.phone}>
              <p>Phone Number </p>
              <input {...register("phone", { required: true })} type="text" />
              {errors.phone?.type === "required" && (
                <p className={styles.required} role="alert">
                  Phone number is required
                </p>
              )}
            </div>

            <div className={styles.email}>
              <p>Subject</p>
              <input {...register("subject", { required: true })} type="text" />
              {errors.subject?.type === "required" && (
                <p className={styles.required} role="alert">
                  Subject is required
                </p>
              )}
            </div>

            <div className={styles.message}>
              <p>Message Details</p>
              <textarea
                {...register("message", { required: true })}
                placeholder="Send me all your questions "
                className={overpass.className}
              ></textarea>
              {errors.message?.type === "required" && (
                <p className={styles.required} role="alert">
                  Message is required
                </p>
              )}
            </div>

            <div className={styles.recaptcha}>
              <ReCAPTCHA sitekey={SITE_KEY} ref={reRef} />
            </div>
            <div className={styles.button}>
              <input type="submit" className={overpass.className} />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
