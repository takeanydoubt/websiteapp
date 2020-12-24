import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"

const PrivacySection = () => {
  const options = ["Terms", "Students", "Tutors"]
  const [myOption, setMyoption] = useState("Terms")
  return (
    <WrapperHero>
      <Wrapper>
        <WrapperButton>
          {options.map(option => (
            <Button key={option} onClick={() => setMyoption(option)}>
              {option}
            </Button>
          ))}
        </WrapperButton>
        <Text>
          {myOption === "Terms" && (
            <Text style={{ fontWeight: "bold" }}>Terms of Service</Text>
          )}
          {myOption === "Terms" && (
            <Text style={{ fontWeight: "bold" }}>1. Terms</Text>
          )}
          {myOption === "Terms" && (
            <Text>
              By accessing this Website, accessible from
              <Link style={{ color: "#4316DB" }} to="/">
                {" "}
                www.takeanydoubt.com{" "}
              </Link>{" "}
              you are agreeing to be bound by these Website Terms and Conditions
              of Use and agree that you are responsible for the agreement with
              any applicable local laws. If you disagree with any of these
              terms, you are prohibited from accessing this site. The materials
              contained in this Website are protected by copyright and trade
              mark law.
            </Text>
          )}

          {myOption === "Terms" && (
            <Text style={{ fontWeight: "bold" }}>2. Use Licence</Text>
          )}
          {myOption === "Terms" && (
            <Text>
              License No permission is granted to temporarily download a copy of
              the materials on TakeAnyDoubt's Website either for personal or
              non-commercial transitory viewing. This is the grant of a license,
              not a transfer of title, and under this license you may not:
            </Text>
          )}

          {myOption === "Terms" && <Text>1. Modify or copy the materials</Text>}
          {myOption === "Terms" && (
            <Text>
              2. Use the materials for any commercial purpose or for any public
              display
            </Text>
          )}
          {myOption === "Terms" && (
            <Text>
              3. Attempt to reverse engineer any software contained on
              TakeAnyDoubt's Website
            </Text>
          )}
          {myOption === "Terms" && (
            <Text>
              4. Remove any copyright or other proprietary notations from the
              materials
            </Text>
          )}
          {myOption === "Terms" && (
            <Text>
              5. Transferring the materials to another person or "mirror" the
              materials on any other server
            </Text>
          )}
          {myOption === "Terms" && (
            <Text>
              This will allow TakeAnyDoubt to terminate upon violations of any
              of these restrictions. Upon termination, your viewing right will
              also be terminated and you should destroy any downloaded materials
              in your possession whether it is printed or electronic format.
              These Terms of Service has been created with the help of the Terms
              Of Service Generator and the Privacy Policy Generator.
            </Text>
          )}
          {myOption === "Terms" && (
            <Text style={{ fontWeight: "bold" }}>3. Disclaimer</Text>
          )}

          {myOption === "Terms" && (
            <Text>
              All the materials on TakeAnyDoubt’s Website are provided "as is".
              TakeAnyDoubt makes no warranties, may it be expressed or implied,
              therefore negates all other warranties. Furthermore, TakeAnyDoubt
              does not make any representations concerning the accuracy or
              reliability of the use of the materials on its Website or
              otherwise relating to such materials or any sites linked to this
              Website.
            </Text>
          )}

          {myOption === "Terms" && (
            <Text style={{ fontWeight: "bold" }}>4. Limitations</Text>
          )}
          {myOption === "Terms" && (
            <Text>
              TakeAnyDoubt or its suppliers will not be hold accountable for any
              damages that will arise with the use or inability to use the
              materials on TakeAnyDoubt’s Website, even if TakeAnyDoubt or an
              authorize representative of this Website has been notified, orally
              or written, of the possibility of such damage. Some jurisdiction
              does not allow limitations on implied warranties or limitations of
              liability for incidental damages, these limitations may not apply
              to you.
            </Text>
          )}
          {myOption === "Terms" && (
            <Text style={{ fontWeight: "bold" }}>5. Revisions and Errata</Text>
          )}
          {myOption === "Terms" && (
            <Text>
              Revisions and Errata The materials appearing on TakeAnyDoubt’s
              Website may include technical, typographical, or photographic
              errors. TakeAnyDoubt will not promise that any of the materials in
              this Website are accurate, complete, or current. TakeAnyDoubt may
              change the materials contained on its Website at any time without
              notice. TakeAnyDoubt does not make any commitment to update the
              materials.
            </Text>
          )}
          {myOption === "Terms" && (
            <Text style={{ fontWeight: "bold" }}>6. Links</Text>
          )}
          {myOption === "Terms" && (
            <Text>
              TakeAnyDoubt has not reviewed all of the sites linked to its
              Website and is not responsible for the contents of any such linked
              site. The presence of any link does not imply endorsement by
              TakeAnyDoubt of the site. The use of any linked website is at the
              user’s own risk.
            </Text>
          )}
          {myOption === "Terms" && (
            <Text style={{ fontWeight: "bold" }}>
              7. Site Terms of Use Modifications
            </Text>
          )}
          {myOption === "Terms" && (
            <Text>
              TakeAnyDoubt may revise these Terms of Use for its Website at any
              time without prior notice. By using this Website, you are agreeing
              to be bound by the current version of these Terms and Conditions
              of Use.
            </Text>
          )}

          {myOption === "Terms" && (
            <Text style={{ fontWeight: "bold" }}>8. Your Privacy</Text>
          )}
          {myOption === "Terms" && <Text>Please read our Privacy Policy.</Text>}

          {myOption === "Terms" && (
            <Text style={{ fontWeight: "bold" }}>9. Governing Law</Text>
          )}
          {myOption === "Terms" && (
            <Text>
              Any claim related to TakeAnyDoubt's Website shall be governed by
              the laws of South Africa.
            </Text>
          )}
        </Text>

        <Text>
          {myOption === "Students" && (
            <Text>
              TakeAnyDoubt offers a service to introduce Tutors and Students to
              each other for Tutors to provide Lessons to Students as well as
              the facilitation of contents (notes, videos and images) to assist
              students in their academics. TakeAnyDoubt does not make any
              guarantees regarding the level of academic improvement the Student
              will achieve. It is the Student's responsibility to invest the
              time and effort needed to achieve academic goals. TakeAnyDoubt is
              a website developed MAINLY to assist Mechanical Engineering
              Students at College Level.
            </Text>
          )}
          {myOption === "Students" && (
            <Text style={{ fontWeight: "bold" }}>1. THE SERVICES</Text>
          )}
          {myOption === "Students" && (
            <Text> a) TakeAnyDoubt shall provide the following Services:</Text>
          )}
          {myOption === "Students" && (
            <Text>
              1.1. Availability of qualified Tutors (Individuals who are
              Computer Literate and have passed the subject offered with + 65%
              Final Mark) to assist Student's tutoring needs
            </Text>
          )}
          {myOption === "Students" && (
            <Text>
              1.2. Facilitation of contents (Past papers and Memos, notes,
              videos and images) to assist students in their academics
            </Text>
          )}
          {myOption === "Students" && (
            <Text> 1.3. The sale of Tutoring Packages on behalf of Tutors</Text>
          )}
          {myOption === "Students" && (
            <Text>
              b) TakeAnyDoubt is also responsible to process the following
              administrative tasks:
            </Text>
          )}
          {myOption === "Students" && (
            <Text>1.4. Co-ordinating Lesson scheduling</Text>
          )}
          {myOption === "Students" && (
            <Text>1.5. Replacing Tutors if required;</Text>
          )}
          {myOption === "Students" && (
            <Text>1.6. Co-ordinating Lesson scheduling</Text>
          )}
          {myOption === "Students" && (
            <Text>
              1.7. Attending to any other reasonable administrative services for
              purposes of the Tutor providing the Lessons to the Student.
            </Text>
          )}
          {myOption === "Students" && (
            <Text style={{ fontWeight: "bold" }}>
              2. RELATIONSHIP BETWEEN TAKEANYDOUBT AND TUTORS
            </Text>
          )}
          {myOption === "Students" && (
            <Text>
              1. TakeAnyDoubt is a platform to link Tutors and students.
              TakeAnyDoubt does not provide the Lessons. TakeAnyDoubt cannot be
              held responsible for the personal actions of Tutors. Tutors
              provide Lessons directly to Students as independent contractors
              and are individually accountable for their actions.
            </Text>
          )}
          {myOption === "Students" && (
            <Text>
              2. TakeAnyDoubt only provides administrative services including
              Client-related support, negotiation of Fees, management of
              logistics, facilitation of value-added services and collection,
              holding and releasing of Fees payable to the Tutor.
            </Text>
          )}
          {myOption === "Students" && (
            <Text style={{ fontWeight: "bold" }}>3. FEES AND PAYMENT</Text>
          )}
          {myOption === "Students" && (
            <Text>
              1.{" "}
              <span style={{ fontWeight: "bold" }}>Methods of payment. </span>{" "}
              All Fees must be paid to TakeAnyDoubt only who receives payment on
              behalf of Tutors. TakeAnyDoubt will advise the Client on the
              relevant payment details and payment methods available.
            </Text>
          )}
          {myOption === "Students" && (
            <Text>
              2.{" "}
              <span style={{ fontWeight: "bold" }}>
                No direct payment to Tutors.
              </span>
              The Client acknowledges TakeAnyDoubt's role to accept payment of
              fees for Lessons on behalf of the Tutor and agrees that all Fees
              will therefore be paid directly to TakeAnyDoubt. The Client agrees
              to not under any circumstances pay Tutors directly. Any payments
              of Fees made to Tutors will not negate the Client's obligation to
              pay the Fees to TakeAnyDoubt and TakeAnyDoubt will not be required
              to recoup any Fees paid to Tutors.
            </Text>
          )}
          {myOption === "Students" && (
            <Text>
              3. <span style={{ fontWeight: "bold" }}>Changes to Fees </span>{" "}
              The Fees may change from time to time on 30 (thirty) days' notice.
              Fee changes will not affect or change Packages/Lessons already
              paid for.
            </Text>
          )}
          {myOption === "Students" && (
            <Text>
              4. <span style={{ fontWeight: "bold" }}>Taxes </span> All Fees
              include Value Added Tax in terms of the Value Added Tax Act 89 of
              1991. To the extent allowed under applicable laws, the Client is
              responsible for any other applicable taxes.
            </Text>
          )}
          {myOption === "Students" && (
            <Text>
              5. <span style={{ fontWeight: "bold" }}>Refunds </span> In the
              event of TakeAnyDoubt cancelling any scheduled Lesson a refund
              will be provided for the Lesson.
            </Text>
          )}
          {myOption === "Students" && (
            <Text>
              6. <span style={{ fontWeight: "bold" }}>Payment of refunds </span>{" "}
              In the event of a refund being provided, TakeAnyDoubt will credit
              the Client with the Fees being refunded within 7 (seven) calendar
              days by making payment to the Client's bank account.
            </Text>
          )}
          {myOption === "Students" && (
            <Text>
              7. <span style={{ fontWeight: "bold" }}>Payment of refunds </span>{" "}
              akeAnyDoubt will make all documentation relating to transactions
              that have been concluded available.
            </Text>
          )}
          {myOption === "Students" && (
            <Text style={{ fontWeight: "bold" }}>4. PACKAGES AND LESSONS</Text>
          )}
          {myOption === "Students" && (
            <Text>
              1.
              <span style={{ fontWeight: "bold" }}>
                {" "}
                Expiration of Package.
              </span>
              The package acquired can either expire due to the complete use of
              the services allowed within the package, or by ending the period
              of time client is granted to use the website services according to
              the package acquired (eg. Monthly package will expire after one
              month of use even if user did not use all the services granted in
              the packages). Therefore, it is the users’ responsibility to
              ensure that he/she uses all the services provided in the package
              within the due limit.
            </Text>
          )}
          {myOption === "Students" && (
            <Text>
              2.
              <span style={{ fontWeight: "bold" }}>
                Discount Accessing Contents.
              </span>
              TakeAnyDoubt will use the pay per reach system. Meaning that
              TakeAnyDoubt will only deduct a certain amount of money from the
              package acquired the first time that users open a content (video,
              image or document), after that users can open the content as many
              times as they wish without suffering any discount. When the
              package expires, and users acquire a new package they will again
              have to pay the first time they open any content, including the
              contents already opened in the previous package acquired.
            </Text>
          )}
          {myOption === "Students" && (
            <Text>
              3.
              <span style={{ fontWeight: "bold" }}>
                Late arrival by Student.
              </span>
              Should the Student arrive late for a Lesson, such Lesson will not
              be extended and will end at the scheduled time according to the
              Lesson description. The Client shall make every effort to inform
              the Tutor of its estimated time of arrival.
            </Text>
          )}
          {myOption === "Students" && (
            <Text>
              4.
              <span style={{ fontWeight: "bold" }}>
                {" "}
                Late arrival by Tutor.
              </span>
              Tutors are obliged to arrive at Lessons on time. However, where
              the Tutor is late, the Tutor will inform the Client and
              TakeAnyDoubt as soon as possible and provide an estimated time of
              arrival and the actual time of arrival. The Client will be
              credited with the time that the Tutor was actually late, in
              increments of 5 (five minutes), which will be redeemable at the
              Client's election or at the end of the Lesson, taking into account
              the Tutor's schedule and availability.
            </Text>
          )}
          {myOption === "Students" && (
            <Text style={{ fontWeight: "bold" }}>
              5. RESCHEDULING OF LESSONS
            </Text>
          )}
          {myOption === "Students" && (
            <Text style={{ fontWeight: "bold" }}>
              1. TakeAnyDoubt will not make provisions for rescheduling of
              Lessons. Therefore Students must ensure they will be available to
              attend the Lesson on the date scheduled.
            </Text>
          )}
          {myOption === "Students" && (
            <Text style={{ fontWeight: "bold" }}>5. TUTORS</Text>
          )}
          {myOption === "Students" && (
            <Text>
              <span style={{ fontWeight: "bold" }}> Withdrawal by Tutor.</span>.
              The Client also acknowledges and accepts that Tutors have the
              right to withdraw from a particular Lesson Schedule on reasonable
              notice and for various urgent reasons (including the Tutor's exam
              or work schedule, legitimate safety concerns, changes to scheduled
              Lessons, family emergencies, transport problems and illness
              amongst others) and that TakeAnyDoubt cannot be held responsible
              for any reasonable inconvenience caused by such event.
              TakeAnyDoubt shall be obliged to source an appropriate replacement
              Tutor as soon as reasonably possible.
            </Text>
          )}
          {myOption === "Students" && (
            <Text>
              <span style={{ fontWeight: "bold" }}>
                6. Grounds for cancellation or refund.
              </span>
              The withdrawal by the Tutor from a Lesson Package shall not be
              grounds for cancellation and shall not entitle the Client to a
              refund unless TakeAnyDoubt is unable to propose an alternative
              Tutor up to a period of 6 hours before the starting of the lesson.
            </Text>
          )}
          {myOption === "Students" && (
            <Text>
              <span style={{ fontWeight: "bold" }}>7. NON-CIRCUMVENTION</span>.
              The Client agrees to not solicit, accept or pay for Lessons from
              any Tutors registered in our platform privately.
            </Text>
          )}
          {myOption === "Students" && (
            <Text style={{ fontWeight: "bold" }}>
              8. WARRANTIES AND REPRESENTATIONS
            </Text>
          )}
          {myOption === "Students" && (
            <Text>
              1. TakeAnyDoubt warrants that all Services provided in terms of
              this Agreement shall be provided and that TakeAnyDoubt will comply
              with its obligations in terms of this Agreement. Save for this
              warranty, TakeAnyDoubt gives no other warranties and makes no
              representations to the Client.
            </Text>
          )}
          {myOption === "Students" && (
            <Text>
              2. The Client warrants to and in favour of TakeAnyDoubt that:
            </Text>
          )}
          {myOption === "Students" && (
            <Text>
              1. the Client has the legal capacity to agree to and be bound by
              this Agreement and is 18 (eighteen) years or older.
            </Text>
          )}
          {myOption === "Students" && (
            <Text>
              2. This Agreement constitutes a contract valid and binding on and
              enforceable against the Client.
            </Text>
          )}
          {myOption === "Students" && (
            <Text>
              3. Each of the warranties given by the Client will continue and
              remain in force irrespective of whether this Agreement or the
              Lesson Package is suspended or cancelled.
            </Text>
          )}
          {myOption === "Students" && (
            <Text style={{ fontWeight: "bold" }}>9. LIMITED LIABILITIES</Text>
          )}
          {myOption === "Students" && (
            <Text>
              1. Where any matter results in a valid claim against TakeAnyDoubt,
              TakeAnyDoubt’s liability will be limited to the Fees paid by the
              Client in respect of the Package/Lesson purchased by the Client
              from which the valid claim arose.
            </Text>
          )}
          {myOption === "Students" && (
            <Text style={{ fontWeight: "bold" }}>10. INDEMNITY</Text>
          )}
          {myOption === "Students" && (
            <Text>
              1. The Client indemnifies TakeAnyDoubt against any claims by any
              third party that TakeAnyDoubt may suffer or incur as a result of
              any breach by the Client of any of the terms of this Agreement.
            </Text>
          )}
          {myOption === "Students" && (
            <Text style={{ fontWeight: "bold" }}>
              11. SAFETY AND INDEMNIFICATION
            </Text>
          )}
          {myOption === "Students" && (
            <Text>
              1. Indemnity The Client hereby indemnifies and holds TakeAnyDoubt
              harmless against claims arising from any act or omission by any
              Tutor who provides Lessons to the Student as a result of this
              Agreement.
            </Text>
          )}
          {myOption === "Students" && (
            <Text>
              2. Onus on Client, the Client acknowledges the need to take every
              precaution necessary in dealing with Tutors, as they would with
              any other independent contractor.
            </Text>
          )}
          {myOption === "Students" && (
            <Text>
              3. Reporting to TakeAnyDoubt, the Client agrees that it will
              inform TakeAnyDoubt of any negative incidents that may occur with
              a Tutor so that TakeAnyDoubt may, at its discretion, investigate
              and take any steps it deems necessary and appropriate in the
              circumstances. Where the Client reports any incidents to
              TakeAnyDoubt, TakeAnyDoubt shall not be liable to take any action
              against the Tutor, and the Client acknowledges and accepts that it
              is the Client's responsibility to pursue any official action
              against the Tutor.
            </Text>
          )}
          {myOption === "Students" && (
            <Text style={{ fontWeight: "bold" }}>12. ACCEPTABLE USE</Text>
          )}
          {myOption === "Students" && (
            <Text>
              1. Make all necessary information available to the Tutor prior to
              each Lesson that the Tutor may require in order to properly assist
              the Student during each Lesson.
            </Text>
          )}
          {myOption === "Students" && (
            <Text>
              2. Only use language that is appropriate and not offensive or
              discriminatory and treat the Tutor fairly and with respect.
            </Text>
          )}
          {myOption === "Students" && (
            <Text>
              2. Only use language that is appropriate and not offensive or
              discriminatory and treat the Tutor fairly and with respect.
            </Text>
          )}
          {myOption === "Students" && (
            <Text>
              2. Only use language that is appropriate and not offensive or
              discriminatory and treat the Tutor fairly and with respect.
            </Text>
          )}
          {myOption === "Students" && (
            <Text>
              3.Ensure that all communications with the Tutor are appropriate
              and limited to what is relevant for the Lesson.
            </Text>
          )}
          {myOption === "Students" && (
            <Text>
              4. Not discuss any personal matters with the Tutor or rely on the
              Tutor for any form of counselling.
            </Text>
          )}
          {myOption === "Students" && (
            <Text>5. Not make any inappropriate suggestions to the Tutor.</Text>
          )}
          {myOption === "Students" && (
            <Text>
              6. Not send any unsolicited communications to the Tutor.
            </Text>
          )}
          {myOption === "Students" && (
            <Text>
              7. Report any dispute or issue, including any inappropriate
              behaviour or illegal activity, with a Tutor to TakeAnyDoubt.
            </Text>
          )}
          {myOption === "Students" && (
            <Text style={{ fontWeight: "bold" }}>
              13. CANCELLATION AND SUSPENSION
            </Text>
          )}
          {myOption === "Students" && (
            <Text>
              1. At any time, and without cause, TakeAnyDoubt may cancel or
              suspend the Client's access to and/or use of the Services.
            </Text>
          )}
          {myOption === "Students" && (
            <Text>
              2. If any party to this Agreement breaches any material provision
              or term of this Agreement and fails to remedy such breach within
              14 (fourteen) days of receipt of written notice requiring it to do
              so then the aggrieved party shall be entitled without notice, in
              addition to any other remedy available to it at law or under this
              Agreement (including obtaining an interdict), to cancel this
              Agreement or to claim specific performance of any obligation
              whether or not the due date for performance has arrived, in either
              event without prejudice to the aggrieved party's right to claim
              damages.
            </Text>
          )}
          {myOption === "Tutors" && (
            <Text>
              By entering into this Agreement, TakeAnyDoubt agrees to provide
              the Agency Services to the Tutor, who is an independent service
              provider, providing the Lessons to the Client on the terms and
              conditions set out in this Agreement.
            </Text>
          )}
          {myOption === "Tutors" && (
            <Text style={{ fontWeight: "bold" }}>
              1. PARTIES' GENERAL OBLIGATIONS
            </Text>
          )}
          {myOption === "Tutors" && (
            <Text>
              1. TakeAnyDoubt shall provide the following Services to the Tutor:
            </Text>
          )}
          {myOption === "Tutors" && (
            <Text>
              1. Introducing Tutors to Clients for Tutors to provide the Lessons
            </Text>
          )}
          {myOption === "Tutors" && (
            <Text>
              2. Co-ordinating Lesson scheduling between the Client and Tutor.
            </Text>
          )}
          {myOption === "Tutors" && (
            <Text>3. Collecting the Client Fees from Clients.</Text>
          )}
          {myOption === "Tutors" && (
            <Text>4. Making payment of the Tutor Fees to the Tutor.</Text>
          )}
          {myOption === "Tutors" && (
            <Text>
              5. Attending to any other reasonable administrative services for
              purposes of the Tutor providing the Lessons to the Student.
            </Text>
          )}
          {myOption === "Tutors" && (
            <Text style={{ fontWeight: "bold" }}>2.The Tutor will</Text>
          )}
          {myOption === "Tutors" && (
            <Text>
              1. Indicate interest for available Lesson that the Tutor is
              suitably qualified and available for.
            </Text>
          )}
          {myOption === "Tutors" && (
            <Text>
              2. Attend to each Lesson in accordance with this Agreement and the
              arrangement with the Client.
            </Text>
          )}
          {myOption === "Tutors" && (
            <Text>
              3. Attend to any other reasonable administrative services for
              purposes of providing the Lessons, including providing an invoice
              to a Client for the Client Fees, who requests an invoice in
              respect of the Lessons received.
            </Text>
          )}
          {myOption === "Tutors" && (
            <Text style={{ fontWeight: "bold" }}>
              1. TakeAnyDoubt is a platform to link Tutors and students.
              TakeAnyDoubt cannot be held responsible for the personal actions
              of Tutors/students. Tutors provide Lessons directly to Students as
              independent contractors and are individually accountable for their
              actions.
            </Text>
          )}
          {myOption === "Tutors" && (
            <Text>
              2. TakeAnyDoubt only provides administrative services including
              Client-related support, negotiation of Fees, management of
              logistics, facilitation of value-added services and collection,
              holding and releasing of Fees payable to the Tutor.
            </Text>
          )}
          {myOption === "Tutors" && (
            <Text>
              3. Under no circumstances will the Tutor be, or deemed to be, an
              employee, agent or partner of TakeAnyDoubt for any purposes.
            </Text>
          )}
          {myOption === "Tutors" && (
            <Text style={{ fontWeight: "bold" }}>
              3. APPLYING FOR LESSON PACKAGES
            </Text>
          )}
          {myOption === "Tutors" && (
            <Text>
              1. When a Client indicates interest in a Lesson, TakeAnyDoubt will
              make relevant information available to Tutors, including:
            </Text>
          )}
          {myOption === "Tutors" && (
            <Text> 1. The scheduling requirements of the Client</Text>
          )}
          {myOption === "Tutors" && (
            <Text> 2. The subject matter of the Lessons</Text>
          )}
          {myOption === "Tutors" && (
            <Text> 3. The Tutor Fee that the Tutor will receive</Text>
          )}
          {myOption === "Tutors" && (
            <Text>
              4. Details about the Student and other Student-specific
              information
            </Text>
          )}
          {myOption === "Tutors" && (
            <Text>
              2. The Tutor must confirm its interest to offer the Lessons
              through TakeAnyDoubt’s systems.
            </Text>
          )}
          {myOption === "Tutors" && (
            <Text style={{ fontWeight: "bold" }}>4. LESSONS</Text>
          )}
          {myOption === "Tutors" && (
            <Text>
              All the arrangements between Tutor and Client must be made using
              TakeAnyDoubt platform.{" "}
            </Text>
          )}
          {myOption === "Tutors" && <Text>2. Tutors are responsible for:</Text>}
          {myOption === "Tutors" && (
            <Text>
              1. Ensuring that the Lesson takes place as specified in the Lesson
              Schedule in respect of time and date.
            </Text>
          )}
          {myOption === "Tutors" && (
            <Text>
              2. Ensuring that they are knowledgeable about the subject matter
              of the Lesson and the needs of the Student.
            </Text>
          )}
          {myOption === "Tutors" && (
            <Text>
              3. Planning and preparing for the Lesson beforehand to ensure that
              the appropriate subject matter is addressed and that the Lesson
              endures for the agreed duration.
            </Text>
          )}
          {myOption === "Tutors" && (
            <Text>
              4.Providing appropriate and necessary materials, tools or supplies
              required by the Tutor's tutoring methods.
            </Text>
          )}
          {myOption === "Tutors" && (
            <Text>
              3. The Tutor acknowledges that if a Lesson duration as set out on
              the Lesson Schedule is exceeded, the Tutor Fee for that Lesson
              will not be increased, and the Tutor will not be entitled to
              reduce the duration of any future Lessons.
            </Text>
          )}
          {myOption === "Tutors" && (
            <Text>
              4. Details about the Student and other Student-specific
              information.
            </Text>
          )}
          {myOption === "Tutors" && (
            <Text>
              2. The Tutor must confirm its interest to offer the Lessons
              through TakeAnyDoubt’s systems.
            </Text>
          )}

          {myOption === "Tutors" && (
            <Text>
              3. The Tutor acknowledges that if a Lesson duration as set out on
              the Lesson Schedule is exceeded, the Tutor Fee for that Lesson
              will not be increased, and the Tutor will not be entitled to
              reduce the duration of any future Lessons.
            </Text>
          )}

          {myOption === "Tutors" && (
            <Text style={{ fontWeight: "bold" }}>5. LESSON SCHEDULES</Text>
          )}
          {myOption === "Tutors" && (
            <Text>
              1.The Client is required to confirm that the lesson scheduled was
              attended. TakeAnyDoubt will make payment to the Tutors in respect
              of the Lessons confirmed by the Client.
            </Text>
          )}
          {myOption === "Tutors" && (
            <Text style={{ fontWeight: "bold" }}>6. FEES AND PAYMENT</Text>
          )}
          {myOption === "Tutors" && (
            <Text>
              1. TakeAnyDoubt collects payment of the Client Fees directly from
              the Client on behalf of the Tutor as part of the Services and
              deducts the platform Fees from the Client Fees prior to paying the
              Tutor Fees to the Tutor as set out herein.
            </Text>
          )}
          {myOption === "Tutors" && (
            <Text>
              2. The Tutor agrees that in consideration for the platform
              Services provided by TakeAnyDoubt, TakeAnyDoubt will charge the
              Tutor the platform Fees which shall be inclusive of VAT.
            </Text>
          )}
          {myOption === "Tutors" && (
            <Text>
              3. Content monetization. Tutor will be earning money every time a
              student accesses for the first time any content he/she uploaded to
              our website. If the package that the student was using expires,
              and the student acquires a new package, the student will have to
              pay again the first time he/she access the content in the new
              package.
            </Text>
          )}
          {myOption === "Tutors" && (
            <Text>
              4. TakeAnyDoubt will hold the Tutor Fees on the Tutor's behalf and
              make payment to the Tutor on a weekly basis. All the services
              provided by the tutor in our website (Tutoring Lessons or contents
              uploaded) which were acquired by the students will be paid to
              Tutors every FRIDAY OF EACH WEEK.
            </Text>
          )}
          {myOption === "Tutors" && (
            <Text>
              5. Manner of payment. All Tutor Fees will be paid to the Tutor via
              electronic transfer to the nominated bank account of the Tutor.
            </Text>
          )}
          {myOption === "Tutors" && (
            <Text>
              6. Currency. The currency used for payments is the South African
              Rand.
            </Text>
          )}
          {myOption === "Tutors" && (
            <Text>
              7. No direct payment to Tutors. The Tutor acknowledges
              TakeAnyDoubt’s role to accept the Tutor Fee on behalf of the Tutor
              and agrees that all Client Fees are payable directly to
              TakeAnyDoubt by the Client. The Tutor agrees to not under any
              circumstances accept payment of the Client Fees from the Client
              directly and inform TakeAnyDoubt of any offers or attempt by the
              Client to do so.
            </Text>
          )}
          {myOption === "Tutors" && (
            <Text>
              8. Reasonable cancellation fee. If a Client cancels a Lesson
              without providing TakeAnyDoubt with the necessary notice, the
              Tutor shall have the right to receive payment of the Tutor Fee for
              the Lesson that has been cancelled without the necessary notice,
              provided that the Client has made payment to TakeAnyDoubt.
            </Text>
          )}
          {myOption === "Tutors" && (
            <Text style={{ fontWeight: "bold" }}>7. PACKAGES AND LESSONS</Text>
          )}
          {myOption === "Tutors" && (
            <Text>
              1. Late arrival by Student. Should the Student arrive late for a
              Lesson, the Tutor is under no obligation to extend the duration of
              the Lesson and may end the Lesson at the scheduled time according
              to the Lesson Schedule. The Tutor will record the start and end
              time of the Lesson on the Lesson Schedule and inform TakeAnyDoubt
              of any delayed or extended Lessons immediately.
            </Text>
          )}
          {myOption === "Tutors" && (
            <Text style={{ fontWeight: "bold" }}>
              2. Late arrival by Tutor:
            </Text>
          )}

          {myOption === "Tutors" && (
            <Text>
              1. Tutors are obliged to arrive at Lessons on time. However, where
              the Tutor is late, the Tutor will inform the Client and
              TakeAnyDoubt as soon as possible and provide an estimated time of
              arrival and the actual time of arrival.
            </Text>
          )}
          {myOption === "Tutors" && (
            <Text>
              2. The Client will be credited with the time that the Tutor was
              actually late, in increments of 5 (five) minutes, which will be
              redeemable at the Client's election or at the end of the Lesson,
              taking into account the Tutor's schedule and availability.
            </Text>
          )}
          {myOption === "Tutors" && (
            <Text>
              3. In the event of the Client cancelling the Lesson as a result of
              the Tutor being late for scheduled Lessons, the Tutor will forfeit
              any Tutor Fees if TakeAnyDoubt has to refund the Client as a
              result of the cancellation.
            </Text>
          )}
          {myOption === "Tutors" && (
            <Text>
              4. Signing of Lesson Schedules. The Client must confirm the
              occurrence of Lessons at the end of each Lesson.
            </Text>
          )}
          {myOption === "Tutors" && (
            <Text style={{ fontWeight: "bold" }}>
              8. RESCHEDULING OF LESSONS
            </Text>
          )}
          {myOption === "Tutors" && (
            <Text>
              1. TakeAnyDoubt will not make provisions for rescheduling of
              Lessons. Therefore Students must ensure they will be available to
              attend the Lesson on the date scheduled.
            </Text>
          )}

          {myOption === "Tutors" && (
            <Text style={{ fontWeight: "bold" }}>9. NON-CIRCUMVENTION</Text>
          )}
          {myOption === "Tutors" && (
            <Text>
              1. For the duration of this Agreement and for 12 (twelve) months
              thereafter, the Tutor agrees to not provide any private tutoring
              services, whether paid or unpaid, to any Clients that the Tutor
              has been introduced to by TakeAnyDoubt.
            </Text>
          )}
          {myOption === "Tutors" && (
            <Text>
              2. If the Tutor is found to be offering any private tutoring
              services to Referred Clients during the term of this Agreement,
              TakeAnyDoubt be entitled to immediately cancel this Agreement.
            </Text>
          )}
          {myOption === "Tutors" && (
            <Text style={{ fontWeight: "bold" }}>
              10. WARRANTIES AND REPRESENTATIONS
            </Text>
          )}
          {myOption === "Tutors" && (
            <Text>
              1. TakeAnyDoubt warrants that all platform Services shall be
              provided and that TakeAnyDoubt will comply with its obligations in
              terms of this Agreement. Save for this warranty, TakeAnyDoubt
              gives no other warranties and makes no representations to the
              Tutor.
            </Text>
          )}
          {myOption === "Tutors" && (
            <Text>
              2. The Tutor will not do or omit to do anything which might
              prejudice or impede the business and/or interests and/or goodwill
              of TakeAnyDoubt.
            </Text>
          )}
          {myOption === "Tutors" && (
            <Text>
              3. The Tutor will comply with all applicable laws and regulations
              of the Republic of South Africa in the course of providing the
              Lessons.
            </Text>
          )}
          {myOption === "Tutors" && (
            <Text>
              4. The Tutor will use the utmost care and skill in undertaking the
              Lessons and exercise the utmost good faith towards TakeAnyDoubt
              and all Clients in carrying out his obligations in terms of this
              Agreement and in providing the Lessons.
            </Text>
          )}
          {myOption === "Tutors" && (
            <Text>
              5. The Tutor is appropriately experienced and qualified to provide
              the Lessons.
            </Text>
          )}
          {myOption === "Tutors" && (
            <Text>
              6. This Agreement constitutes a contract valid and binding on and
              enforceable against the Tutor.
            </Text>
          )}
          {myOption === "Tutors" && (
            <Text>
              7. Each of the warranties given by the Tutor will continue and
              remain in force irrespective of whether this Agreement is
              suspended or cancelled.
            </Text>
          )}
          {myOption === "Tutors" && (
            <Text style={{ fontWeight: "bold" }}>11. LIMITED LIABILITIES</Text>
          )}
          {myOption === "Tutors" && (
            <Text>
              1. To the extent capable of exclusion in terms of applicable laws,
              the maximum liability of TakeAnyDoubt to the Tutor for any costs,
              claims, penalties, awards, determinations or damages (including,
              without limitation, any indirect, incidental, special,
              consequential, punitive, exemplary or other similar damages) which
              the Tutor may suffer or incur, arising out of, or in connection
              with, whether directly or indirectly, the entering into,
              implementation and/or termination of this Agreement shall be an
              amount equal to the Platform Fees paid to TakeAnyDoubt by the
              Tutor in respect of the specific Lesson of the Client from which
              the costs, claims, penalties, awards, determinations or damages
              arose.
            </Text>
          )}
          {myOption === "Tutors" && (
            <Text>
              2.TakeAnyDoubt shall not be liable to the Tutor for any
              consequential losses suffered or incurred by the Tutor under any
              circumstances.
            </Text>
          )}
          {myOption === "Tutors" && (
            <Text style={{ fontWeight: "bold" }}>12. INDEMNITY</Text>
          )}
          {myOption === "Tutors" && (
            <Text>
              Very important: the Tutor indemnifies TakeAnyDoubt against any
              claims by any third party, including claims by Clients, that
              TakeAnyDoubt may suffer or incur as a result of any breach by the
              Tutor of any of the terms of this Agreement.
            </Text>
          )}
          {myOption === "Tutors" && (
            <Text style={{ fontWeight: "bold" }}> 13. ACCEPTABLE USE</Text>
          )}
          {myOption === "Tutors" && (
            <Text>
              1. Request all necessary information from the Client prior to each
              Lesson that the Tutor may require in order to properly assist the
              Student during each Lesson.
            </Text>
          )}
          {myOption === "Tutors" && (
            <Text>
              2. Request all necessary information from the Client prior to each
              Lesson that the Tutor may require in order to properly assist the
              Student during each Lesson.
            </Text>
          )}
          {myOption === "Tutors" && (
            <Text>
              3. Ensure that all communications with the Client and/or Student
              are appropriate and limited to what is relevant for the Lesson.
            </Text>
          )}
          {myOption === "Tutors" && (
            <Text>
              4. Not discuss any personal matters with the Client and/or Student
              or allow any form of counselling to the Client and/or Student.
            </Text>
          )}
          {myOption === "Tutors" && (
            <Text>
              5. Not make any inappropriate suggestions to the Client and/or
              Student.
            </Text>
          )}
          {myOption === "Tutors" && (
            <Text>
              6. Not send any unsolicited communications to the Client and/or
              Student.
            </Text>
          )}
          {myOption === "Tutors" && (
            <Text>
              7. Report any dispute or issue, including any inappropriate
              behaviour or illegal activity, with a Client and/or Student to
              TakeAnyDoubt.
            </Text>
          )}
          {myOption === "Tutors" && (
            <Text style={{ fontWeight: "bold" }}>14. Termination</Text>
          )}
          {myOption === "Tutors" && (
            <Text>
              1. At any time, either TakeAnyDoubt or the Tutor may terminate the
              Agreement for any reason or no reason by giving 30 (thirty)
              calendar days' advance written notice to the other party. In
              addition to the required notice, the Tutor may be required to
              complete all outstanding Lessons in any booked Lesson if required
              by TakeAnyDoubt and this Agreement shall continue to apply until
              such Lessons have been completed and the Tutor has complied with
              all obligations in respect of such Lessons.
            </Text>
          )}
          {myOption === "Tutors" && (
            <Text>
              2. Apart from any other provision of this Agreement, TakeAnyDoubt
              shall have the right to terminate the Agreement immediately
              without notice or liability for further compensation or any
              damages if the Tutor is guilty of, or there are reasonable grounds
              for suspecting that the Tutor is guilty of, any gross negligence,
              breach of any law or regulations applicable to the Lessons,
              incompetence in the performance of the Lessons, breach of any
              provision of this Agreement, including providing inadequate notice
              to reschedule Lessons, defrauding or attempting to defraud
              TakeAnyDoubt, its agents or customers or misconduct prejudicial to
              the interests of TakeAnyDoubt or any of its subsidiary or
              associated companies.
            </Text>
          )}
          {myOption === "Tutors" && (
            <Text style={{ fontWeight: "bold" }}>15. DISPUTES</Text>
          )}
          {myOption === "Tutors" && (
            <Text>
              1. In the event of a dispute between the Client and a Tutor
              regarding their working relationship or the Lessons conducted, the
              Tutor authorises TakeAnyDoubt to assist in investigating and
              mediating such dispute with the Client on its behalf.
            </Text>
          )}
          {myOption === "Tutors" && (
            <Text>
              2. Other than in respect of those provisions of this Agreement
              which provide for their own remedies which would be incompatible
              with arbitration, any dispute which arises between the Tutor and
              TakeAnyDoubt shall be submitted to and decided by arbitration in
              accordance with the arbitration rules and legislation for the time
              being in force in the Republic of South Africa.
            </Text>
          )}
          {myOption === "Tutors" && (
            <Text>
              3. The costs and expenses ancillary to the hearing shall be borne
              by the parties in equal shares. The parties, together with the
              arbitrator will agree from time to time on the arbitrator's
              remuneration, upon receipt of invoices.
            </Text>
          )}
        </Text>
      </Wrapper>
    </WrapperHero>
  )
}

export default PrivacySection

const WrapperHero = styled.div`
  /* background: url("/images/waves/testimonial-wave1.svg"); */
`
const Wrapper = styled.div`
  padding: 300px 0 300px 0;
`
const WrapperButton = styled.div`
  display: grid;
  grid-template-columns: 280px 280px 280px;
  justify-content: center;
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 200px 200px 200px;
    gap: 40px;
  }

  @media (max-width: 640px) {
    grid-template-columns: 300px;
    margin-left: 60px;
    gap: 10px;
  }
  }
`
const Button = styled.div`
  margin: 0 0 40px 0;
  width: 300px;
  height: 70px;
  background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%);
  cursor: pointer;
  display: grid;
  justify-items: center;
  align-items: center;
  font-size: 16px;
  text-transform: uppercase;
  color: white;
  padding: 10px 25px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  font-weight: bold;

  @media (max-width: 768px) {
    width: 220px;
    height: 70px;
  }
`

const Text = styled.h2`
  font-size: 22px;
  line-height: 160%;
  margin: 0 130px 20px 130px;
  font-family: SF Pro Display;
  color: white;

  @media (max-width: 640px) {
    margin: 0 20px 0 20px;
    font-size: 18px;
  }
  @media (max-width: 768px) {
    margin: 20px 40px 0px 40px;
  }
`
