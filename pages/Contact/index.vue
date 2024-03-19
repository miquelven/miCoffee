<template>
  <section id="contact" data-aos="zoom-in">
    <div>
      <h4>Get in Touch</h4>
      <p>
        Get in Touch Welcome to our contact page! We're thrilled to know that
        you're interested in reaching out to us. Whether you have a question,
        suggestion, or just want to say "hello," we're here to listen to you.
        There are several ways to get in touch with us:
      </p>
    </div>
    <div>
      <h4>Contact Form:</h4>
      <p>
        Please fill out the form below, and we'll get back to you as soon as
        possible. Make sure to provide your correct contact information so we
        can respond appropriately.
      </p>
      <form>
        <label for="email">
          <span data-aos="fade-up" data-aos-delay="400"> Email: </span>
          <input type="email" name="email" id="email" ref="email" />
          <span ref="errorEmail" class="errorMessage">
            Enter a valid email
          </span>
        </label>
        <label for="textContent">
          <span data-aos="fade-up" data-aos-delay="400">Message:</span>
          <textarea
            data-aos="fade-up"
            data-aos-delay="400"
            name="textContent"
            id="textContent"
            cols="30"
            rows="10"
            ref="textarea"
          ></textarea>
          <span ref="errorMessage" class="errorMessage">
            Fill in the field</span
          >
        </label>
        <button data-aos="fade-up" ref="button" @click.prevent="validateFields">
          Send
        </button>
      </form>
    </div>
    <div data-aos="fade-up">
      <h4>Phone:</h4>
      <p>
        If you prefer to speak with us directly, you can call our phone number
        <a href="">202-555-0191</a> during business hours. Our team will be
        happy to assist you with your inquiries.
      </p>
    </div>
    <div data-aos="fade-up">
      <h4>Email:</h4>
      <p>
        <a href="">contact@midrinks.com</a> . We'll do our best to respond to
        all messages as quickly as possible.
      </p>
    </div>
    <div data-aos="fade-up">
      <h4>Social Media:</h4>
      <p>
        Feel free to follow us on our social media channels to stay updated on
        the latest news, promotions, and special events.
      </p>
      <ul>
        <li data-aos="zoom-in" data-aos-delay="400">
          <Icon name="uil:facebook" size="24" />
        </li>
        <li data-aos="zoom-in" data-aos-delay="400">
          <Icon name="uil:instagram" size="24" />
        </li>
        <li data-aos="zoom-in" data-aos-delay="400">
          <Icon name="uil:twitter" size="24" />
        </li>
      </ul>
    </div>
    <div data-aos="fade-up">
      <h4>Location:</h4>
      <p>
        If you'd like to visit us in person, we're located at
        <a href=""
          >3987 Lake Tahoe Blvd, South Lake Tahoe, CA 96150, United States.</a
        >
        Our team will be happy to welcome you and assist with any questions or
        requests
      </p>
      <p>
        We're looking forward to hearing from you and helping you in any way we
        can. Thank you for choosing MiDrinks!
      </p>
    </div>
    <div id="mapArea">
      <iframe
        data-aos="zoom-in"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12412.153339811737!2d-119.9860125128418!3d38.945952600000034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809990742180f7a7%3A0x1b3eb7cd52e2a205!2sApplebee&#39;s%20Grill%20%2B%20Bar!5e0!3m2!1spt-PT!2sbr!4v1707503271614!5m2!1spt-PT!2sbr"
        width="100%"
        height="450"
        style="border: 0"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </section>
</template>

<script setup lang="ts">
useHead({
  title: "Mi Drinks - Contact",
});

const email = ref<Ref | null>(null);
const textarea = ref<Ref | null>(null);

const errorEmail = ref<Ref | null>(null);
const errorMessage = ref<Ref | null>(null);

const button = ref<Ref | null>(null);

const validateFields = () => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const emailValue = email.value.value;
  const textareaValue = textarea.value.value;

  textareaValue.trim() == ""
    ? (errorMessage.value.style.opacity = "1")
    : (errorMessage.value.style.opacity = "0");

  if (!emailPattern.test(emailValue)) {
    errorEmail.value.style.opacity = "1";
  } else {
    errorEmail.value.style.opacity = "0";
  }
};
</script>
