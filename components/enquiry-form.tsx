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
          {partnership ? "Partnership avenue" : "Enquiry interest"}
          <select name="interest" defaultValue="">
            <option value="" disabled>
              {partnership ? "Select how you'd like to partner" : "Select an interest"}
            </option>
            {partnership ? (
              <>
                <option value="pray">01 / Pray (Intercessory Shield & Prayer Chain)</option>
                <option value="mobilise">02 / Mobilise (Youth Group / Campus Delegation)</option>
                <option value="serve">03 / Serve (Worship, Tech, Media, Hospitality)</option>
                <option value="host">04 / Host (Provide Venue, Hall or Hub)</option>
                <option value="follow-up">05 / Follow Up (Discipleship & Church Connection)</option>
                <option value="general-partner">General church or ministry partnership</option>
              </>
            ) : (
              <>
                <option>Gatherings & attendance</option>
                <option>Volunteering & serving</option>
                <option>Intercessory prayer</option>
                <option>Young Believers Forum</option>
                <option>Leadership & credibility questions</option>
                <option>General enquiry</option>
              </>
            )}
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

