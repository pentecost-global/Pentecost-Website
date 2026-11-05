"use client";

import { Button } from "@/components/ui/button";

export interface EnquiryFormProps {
  partnership?: boolean;
}

export function EnquiryForm({ partnership = false }: EnquiryFormProps) {
  return (
    <form
      className="enquiry"
      aria-label={partnership ? "Partnership enquiry" : "Contact enquiry"}
      onSubmit={(event) => event.preventDefault()}
    >
      <div className="enquiry-notice" id="enquiry-status">
        <strong>Enquiries opening soon</strong>
        Form submission is not yet configured. These fields are unavailable for
        now; no information is sent or stored.
      </div>

      <fieldset
        disabled
        className="form-grid"
        aria-describedby="enquiry-status"
      >
        {partnership && (
          <label className="form-field full">
            Organisational name
            <input
              name="organisation"
              placeholder="Church, ministry or fellowship"
              maxLength={150}
            />
          </label>
        )}

        <label className="form-field">
          {partnership ? "Contact person's name" : "Your name"}
          <input
            name="name"
            autoComplete="name"
            placeholder="Full name"
            maxLength={100}
          />
        </label>

        <label className="form-field">
          Email address
          <input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Your email address"
            maxLength={255}
          />
        </label>

        <label className="form-field">
          City
          <input
            name="city"
            placeholder="Your town or city"
            maxLength={100}
          />
        </label>

        <label className="form-field">
          {partnership ? "Partnership interest" : "Enquiry interest"}
          <select name="interest" defaultValue="">
            <option value="" disabled>
              Select an interest
            </option>
            <option>Church or ministry partnership</option>
            <option>Volunteering</option>
            <option>Prayer</option>
            <option>Young Ministers&apos; Forum</option>
            <option>General enquiry</option>
          </select>
        </label>

        <label className="form-field full">
          Message
          <textarea
            name="message"
            placeholder="Your message"
            maxLength={2000}
          />
        </label>
      </fieldset>

      <Button variant="movement" size="lg" disabled>
        Enquiries opening soon
      </Button>

      <p className="form-footnote">
        No applications or registrations are being accepted through this form
        yet. Privacy information will be provided before enquiries open.
      </p>
    </form>
  );
}

