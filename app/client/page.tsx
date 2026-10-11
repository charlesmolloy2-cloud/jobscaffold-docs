import Section, { BulletGroup } from "@/components/Section";

export default function FlowClientPage() {
  return (
    <div>
      <div>Client Flow</div>

      <ol className="nested">
        <li>
          Receive an invitation from the contractor with an invitation URL
          (/projects/PROJECT_ID/client).
        </li>


        <Section label="Fill out the registration form">
          <li>First name</li>
          <li>Last name</li>
          <li>Email address</li>
          <li>Password</li>
          <li>Confirm password</li>
        </Section>

        <li>
          Submit the registration form to create the client account and navigate
          to /projects/PROJECT_ID.
        </li>

        <Section label="Confirm the nav bar is complete main navigation">
          <li>Project</li>
          <li>Updates</li>
          <li>Messages</li>
          <li>Calendar</li>
          <li>Settings</li>
          <li>Logout</li>
        </Section>

     
          <Section label="Review the project overview">
            <li>Project name</li>
            <li>Contractor name</li>
            <li>Project Adress</li>
            <li>Project Type</li>
            <li>Estimated Start Date</li>
            <li>Estimated Completion Date</li>
            <li>Project description</li>
            <li>Contractor phone</li>
            <li>Contractor email</li>
          </Section>

        <Section
          label='Tap the "Updates" tab to navigate to /projects/PROJECT_ID/updates'
        >
          <li>View the chronological list of update dates.</li>

          <Section label="Tap an update in the list to navigate to /projects/PROJECT_ID/updates/UPDATE_ID">
            <BulletGroup>
              <li>View the update</li>
              <li>View delays or issues if provided</li>
              <li>View next steps if provided</li>
              <li>View captioned photos if provided</li>
              <li>Tap a photo to expand it</li>
              <li>
                Tap "Download" to download a zip file of the update&apos;s
                photos
              </li>
            </BulletGroup>
          </Section>
        </Section>

        <Section
          label='Tap the "Messages" tab to navigate to /projects/PROJECT_ID/messages'
        >
          <li>
            View the complete conversation history of timestamped messages with
            read/unread indicators.
          </li>

          <li>
            Use the inline form to send a new message to the contractor.
          </li>

          <li>
            Confirm the new message appears unread in the conversation history
            with its timestamp.
          </li>
<li> 
After the contractor reads the message, confrim that the message is marked as read.
</li>
          <li>Wait for a reply from the contractor.</li>

          <li>
            Receive a notification when the contractor replies. ***
          </li>

          <li>
            Confirm the contractor&apos;s reply appears read in the conversation
            history with its timestamp. ***
          </li>
          
        </Section>

        <Section
          label='Tap the "Calendar" tab to navigate to /projects/PROJECT_ID/calendar'
        >
        <li>
         Review the list of events each with their date and time. 
         </li>
         <Section label='Tap an event to navigate to /projects/PROJECT_ID/calendar/EVENT_ID to review the event details'>
          <li>Project</li>
            <li>Type</li>
            <li>Date</li>
            <li>Time</li>
            <li>Description</li>
            </Section>
        </Section>

            <Section label='Tap the "Settings" tab to navigate to /settings'>
          <Section label='Tap the "Profile" button to navigate to /settings/profile'>
            <Section label='Complete the form'>
              <li>
               First Name
              </li>
              <li>
                Last Name
              </li>
            </Section>
            <li>
            Submit the form to update the users client profile.
            </li>
          </Section>
          <Section label='Tap the "Security" button to naviaagte to /settings/security'>
            <li>
              Enter the old password in the "Current password" field.
            </li>

            <li>
              Enter the new password in the "New password" field.
            </li>

            <li>
              Enter the new password in the "Confirm password" field.
            </li>
            <li>
              Tap "Change password" to submit the form close the diaglog and update the password.
            </li>
          </Section>

        </Section>
        
                <li> 
        Tap the project tab to navigate to /projects/PROJECT_ID
        </li>
        <li> 
        Confirm the contractor and project details are displayed
        </li>  
        
 <Section label='Tap "Logout" in the navbar to close the session and navigate to /login'>
        <Section label='Comeplete the forms required fields'>
        <li> 
        Email Adress
        </li>
        <li>
        Password
        </li>
        </Section>
        <li> 
        Tap "Login" to submit the form and create a new session.
        </li>
        </Section>
      
      </ol>
    </div>
  );
}