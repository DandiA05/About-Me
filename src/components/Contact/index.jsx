"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import * as yup from "yup";
import { Mail, MessageCircle, Send, ArrowRight } from "lucide-react";

const Contact = () => {
    const form = useRef();
    const [showSuccess, setShowSuccess] = useState(false);

    const sendEmail = (values) => {
        // emailjs.send(
        //     "service_d87741p",
        //     "template_ics8m2l",
        //     values,
        //     "HZVK84zdM2K-TY6HQ"
        // ).then(() => {
        //     setShowSuccess(true);
        //     setTimeout(() => setShowSuccess(false), 5000);
        // }, (error) => {
        //     console.log(error.text);
        // });
    };

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            project: "",
        },
        validationSchema: yup.object({
            name: yup.string().required("Required").min(3, "Too Short!").max(20, "Too Long!"),
            email: yup.string().email("Invalid email").required("Required"),
            project: yup.string().required("Required").min(3, "Too Short").max(50, "Too Long!"),
        }),
        onSubmit: (values, { resetForm }) => {
            sendEmail(values);
            resetForm();
        },
    });

    return (
        <section className="contact section bg-title-dark py-40" id="contact">
            <h2 className="section__title !text-white">Contact</h2>
            <span className="section__subtitle text-text-light/60">Ways to reach me</span>

            <div className="contact__container container grid md:grid-cols-[1fr_1.2fr] gap-20 md:gap-32">
                <div className="contact__content" data-aos="fade-up">
                    <h3 className="contact__title text-xs font-black text-text-light/40 uppercase tracking-[0.3em] mb-12">Information</h3>

                    <div className="contact__info grid gap-8">
                        {[
                            { icon: Mail, title: "Email", data: "dandianto05@gmail.com", link: "mailto:dandianto05@gmail.com", btn: "Email me" },
                            { icon: MessageCircle, title: "Whatsapp", data: "+62 821 5224 8225", link: "https://api.whatsapp.com/send/?phone=6282152248225", btn: "Text me" },
                        ].map((item, idx) => (
                            <div key={idx} className="contact__card group transition-all duration-500">
                                <div className="flex items-center gap-8 mb-4">
                                    <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-white transition-all duration-500 group-hover:bg-white group-hover:text-title-dark group-hover:-translate-y-1">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-[10px] font-black text-text-light/40 uppercase tracking-[0.2em] mb-1">{item.title}</h4>
                                        <p className="text-lg font-bold text-white tracking-tight">{item.data}</p>
                                    </div>
                                </div>
                                <a href={item.link} className="inline-flex items-center gap-3 text-xs font-bold text-white/40 hover:text-white transition-colors ml-22 uppercase tracking-widest">
                                    {item.btn} <ArrowRight className="w-3 h-3" />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="contact__content" data-aos="fade-up" data-aos-delay="200">
                    <h3 className="contact__title text-xs font-black text-text-light/40 uppercase tracking-[0.3em] mb-12">Send a Message</h3>
                    <form onSubmit={formik.handleSubmit} className="contact__form flex flex-col gap-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="relative">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    className={`w-full bg-white/5 border border-white/10 focus:border-white/30 rounded-[2rem] p-6 text-sm text-white outline-none transition-all duration-500 placeholder:text-text-light/30 ${formik.touched.name && formik.errors.name ? "border-red-400" : ""}`}
                                    onChange={formik.handleChange}
                                    value={formik.values.name}
                                />
                            </div>

                            <div className="relative">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    className={`w-full bg-white/5 border border-white/10 focus:border-white/30 rounded-[2rem] p-6 text-sm text-white outline-none transition-all duration-500 placeholder:text-text-light/30 ${formik.touched.email && formik.errors.email ? "border-red-400" : ""}`}
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                />
                            </div>
                        </div>

                        <div className="relative">
                            <textarea
                                name="project"
                                rows="6"
                                placeholder="Tell me about your project..."
                                className={`w-full bg-white/5 border border-white/10 focus:border-white/30 rounded-[2.5rem] p-8 text-sm text-white outline-none transition-all duration-500 resize-none placeholder:text-text-light/30 ${formik.touched.project && formik.errors.project ? "border-red-400" : ""}`}
                                onChange={formik.handleChange}
                                value={formik.values.project}
                            ></textarea>
                        </div>

                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <button type="submit" className="button !bg-white !text-title-dark hover:!bg-accent w-full md:w-auto px-12 group">
                                Send Message
                                <Send className="ml-4 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </button>
                            {showSuccess && (
                                <div className="flex items-center gap-3 text-green-400 font-bold text-sm tracking-tight animate-pulse">
                                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                    Message delivered. Talk soon!
                                </div>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;

