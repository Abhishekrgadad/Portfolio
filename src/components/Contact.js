import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Contact = () => {
  const [feedback, setFeedback] = useState({ rating: 0, comment: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const WEB3FORMS_ACCESS_KEY = "4987e65e-fac8-4aae-aacf-fb3a7660319f"; // Replace with your actual Web3Forms access key

  const handleRatingChange = (rating) => {
    setFeedback((prevFeedback) => ({ ...prevFeedback, rating }));
  };

  const handleCommentChange = (event) => {
    setFeedback((prevFeedback) => ({ ...prevFeedback, comment: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("rating", feedback.rating);
    formData.append("comment", feedback.comment);
    

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFeedback({ rating: 0, comment: "" });
      } else {
        console.error("Form submission failed.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const fade = {
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  };

  return (
    <div className="contact" id="contact" style={styles.contactContainer}>
      <div className="container">
        <motion.div className="heading" initial={{ opacity: 0 }} whileInView={fade} viewport={{ once: true }}>
          <p className="heading-text">Get in Touch</p>
        </motion.div>

        <div className="contact-box" style={styles.contactBox}>
          <motion.div className="left-box" initial={{ opacity: 0, y: "-50px" }} whileInView={fade} style={styles.leftBox}>
            <div className="contact-heading" style={styles.contactHeading}>
              <p>
                I’m interested in freelance opportunities – especially ambitious or large projects. However, if you have other
                requests or questions, don’t hesitate to use the form below.
              </p>
            </div>
            <div className="contact-hello">
              <p>Say Hello</p>
              <Link className="hello-links" to="//wa.me/+918431642320" target="_blank" style={styles.helloLinks}>
                <b>Whatsapp me!</b>
              </Link>
              <a className="hello-links" href="mailto:4al21cs006@gmail.com" target="_blank" rel="noreferrer" style={styles.helloLinks}>
                <b>Email me!</b>
              </a>
            </div>
          </motion.div>

          <motion.div className="right-box" initial={{ opacity: 0, y: "50px" }} whileInView={fade} style={styles.rightBox}>
            {/* Feedback Form */}
            <div style={styles.feedbackCard}>
              <h2 style={styles.formTitle}>You Reached till end just Leave Your Honest Feedback about this site!</h2>
              <form onSubmit={handleSubmit}>
                <div style={styles.formGroup}>
                  <p style={styles.formLabel}>Rating:</p>
                  <div style={styles.ratingGroup}>
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <button
                        key={rating}
                        type="button"
                        style={feedback.rating >= rating ? styles.ratingButtonActive : styles.ratingButton}
                        onClick={() => handleRatingChange(rating)}
                      >
                        {feedback.rating >= rating ? "😊" : "😐"}
                      </button>
                    ))}
                  </div>
                </div>
                <div style={styles.formGroup}>
                  <p style={styles.formLabel}>Comment:</p>
                  <textarea
                    style={styles.textArea}
                    value={feedback.comment}
                    onChange={handleCommentChange}
                    rows={5}
                  />
                </div>
                <button type="submit" style={styles.submitButton}>
                  Submit Feedback
                </button>
              </form>
              {isSubmitted && (
                <div style={styles.thankYouMessage}>
                  <p style={styles.thankYouText}>Thank you for your feedback! I will make Changes Soon!
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  contactContainer: {
    padding: "20px",
    backgroundColor: "black",
    minHeight: "100vh",
  },
  contactBox: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
  },
  leftBox: {
    flex: 1,
    padding: "20px",
  },
  contactHeading: {
    marginBottom: "20px",
  },
  helloLinks: {
    display: "block",
    color: "#3498db",
    textDecoration: "none",
    marginBottom: "10px",
  },
  rightBox: {
    flex: 1,
    padding: "20px",
  },
  feedbackCard: {
    backgroundColor:"#CCEDEF",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    maxWidth: "500px",
    margin: "0 auto",
  },
  formTitle: {
    fontSize: "1.25rem",
    fontWeight: "bold",
    marginBottom: "10px",
    color:"Black",
  },
  formGroup: {
    marginBottom: "20px",
  },
  formLabel: {
    fontSize: "0.9rem",
    fontWeight: "bold",
    marginBottom: "5px",
    color:"Black"
  },
  ratingGroup: {
    display: "flex",
    gap: "10px",
  },
  ratingButton: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "#e0e0e0",
    color: "#555",
    fontSize: "1.25rem",
    border: "none",
    cursor: "pointer",
  },
  ratingButtonActive: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "#3498db",
    color: "white",
    fontSize: "1.25rem",
    border: "none",
    cursor: "pointer",
  },
  textArea: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    outline: "none",
    fontSize: "1rem",
  },
  submitButton: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#3498db",
    color: "white",
    borderRadius: "5px",
    border: "none",
    fontSize: "1rem",
    cursor: "pointer",
  },
  thankYouMessage: {
    marginTop: "20px",
    padding: "10px",
    backgroundColor: "#e0f8e0",
    borderRadius: "5px",
    color:"Black"
  },
  thankYouText: {
    fontSize: "0.9rem",
    fontWeight: "bold",
  },
};

export default Contact;
