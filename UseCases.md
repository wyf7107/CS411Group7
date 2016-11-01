# Use Cases
#### Created on: October 2, 2016
#### Satoe Sakuma, Jesus Franco, Lai Wei, Yifan Wang


## Use Case List

| ID            | Primary Actor | Use Case Title           |
| ------------- |:-------------:| ------------------------:|
| 1             | User          | Search for Contact       |
| 2             | User          | Store Name Card Info     |
| 3             | User          | Send Notification        |
| 4             | User          | Locate Contacts on Map   |
| 5             | User          | Authenticate User        |

## Use Case Paragraphs

#### 1: Lai Wei
Search for contact is a function that can allow users to find their desired contacts who are already stored in their contact list. This function  provides a convenient way for users to find the contacts stored in the contact list. Users don’t have to look up the contacts one  by one in their contact list. Instead, they can simply type in the name of the contact desired and the results will be displayed.

#### 2: Jesus
Store name card info is a function in which mobile phone camera scans a business card and saves its contents such as: the business name, person’s name, address, and contact information. The Actor would place the name card in front of the camera (with the card holders information facing up) and the device will detect the information and store it automatically in a local database. If the card is unreadable or some information is missing, the user will be asked to type it in. This function is useful for busy people who often misplace business cards, or who forget about important events or connections with a person.

#### 3: Satoe
Send notification is a function to remind users to reach out their contacts on set time, birthday, or a few days after a meeting. This is built in to take the hassle away from the user to remember to write thank you cards or birthday cards to their professional contacts that they would like to maintain in their network. We are thinking about providing templates for users to choose from, so that we can maximize convenience for our users. By keeping track of the last time of communication, we will provide users with the option of how frequently they would like to reach out. This way, we can remind our users to reach out in a timely fashion that keeps a tight network with maximum efficiency.

#### 4: Yifan
Location Service is an essential part of our application. Users will not only be able to search for others users, store information, get notifications, but also locate their professional contacts in a real-time map. This function will be very useful when the user wants to get a sense about how far he or she is away from his or her target contact people. Moreover, a ‘nearby me’ feature is set up for the benefit of the users to locate contacts near their current geographic locations so that it gets more easier to find people and get in touch with them.

#### 5: Lai Wei
Authenticate User is a function that helps user to create an account on our web application. When the user first visit our website, they will need to create a new account name with a password. After this process, users can start to store the contacts they want under their accounts. This function is necessary because users will have different personal contacts and that is a good way to store users’ own personal contacts.



## Use Case Template 

<table>
  <tr>
    <td> Use Case ID:</td>
    <td colspan ="3"> 1 </td>
  </tr>
  <tr>
    <td> Use Case Name: </td>
    <td colspan ="3"> Search for Contacts </td>
  <tr>
    <td> Created By: </td>
    <td> Jesus Franco, Lai Wei, Yifan Wang, Satoe Sakuma </td>
    <td> Last Updated By: </td>
    <td> Lai Wei </td>
  </tr>
  <tr>
   <td> Date Created: </td>
   <td> October 30, 2016 </td>
   <td> Date Last Updated: </td>
   <td> October 30, 2016</td>
  </tr>
</table>   

<table> 
  <tr> 
   <td> Actors: </td>
   <td> Ambitious Job Seeker (User) </td>
  </tr>
  <tr>
    <td> Description: </td>
    <td> We are aiming to have the user search for contacts from the contact list and the outcome will be that the user will get 
   the desired contacts and are able to be put in the map API. </td>
  </tr>
  <tr>
    <td> Trigger: </td>
    <td> <ol>
      <li> The user has an interview with the employer and would like to find the contact with the first letter of their name.
      The information would already be saved in the contact database.  </li>
      <li> The user could be traveling to a new city and would like to meet up with old professional contacts nearby.</li> </ol>
     </td>
  </tr>
  <tr>
   <td> Preconditions: </td>
   <td> <ol><li> In order for this use case to execute, we need the contacts' information saved in the database.  </li>
        <li> User authentication must be working properly to ensure the user's contacts to display in maps. </li> 
        <li> The user must be in a location that they can have an access on internet.</li></ol>
   </td>
  </tr>
  <tr>
   <td> Postconditions: </td>
   <td> <ol><li> To keep track of when you last viewed this contact and update any changes of the contacts  </li> </ol>
        </td>
  </tr>
  <tr>
    <td> Normal Flow: </td>
    <td> 1.0. User has meeting and selects contact they have to meet with <br>
         1.1. The contacts will be diplayed and are able to be put in map API </td>
  </tr>
  <tr>  
   <td> Alternative Flows: </td>
   <td> 1.0. User types in the full name of a user, the contact name will still be displayed </td>
  <tr>
  <tr>  
   <td> Exceptions: </td>
   <td> 1.2 E.0. The contact name is not stored in the list. User have to store the contacts first.  <br>
        1.3 E.0. User does not have internet access. System will just try reconnecting to the internet.<br>
     
     </td>
  </tr>
  <tr>  
   <td> Includes: </td>
   <td> <ol><li> Authenticate User </li>
     <li> Confirm Completion </li>
     </ol>
   </td>
  </tr>
  <tr>  
   <td> Priority: </td>
   <td> High </td>
  </tr>
  <tr>  
   <td> Frequency of Use: </td>
   <td> If all of BU is in our user pool, then we estimate about 3 or 4 people would utilize this use case per hour. This average is limited to working hours (Monday-Friday: 9am - 7pm). </td>
  </tr>
  <tr>  
   <td> Business Rules: </td>
   <td> Privacy Etiquette</td>
  </tr>
  <tr>  
   <td> Special Requirements: </td>
   <td> <ul><li> Card Scanner API must be functional with little error. </li>
   <li> Database must be big enough to store the contact information. </li></ul>
   </td>
  </tr>
  <tr>  
   <td> Assumptions: </td>
   <td> We assume that the user cannot remember all the contact information. We also assume that they use our applications to store their contacts. </td>
  </tr>
  <tr>  
   <td> Notes and Issues: </td>
   <td> <ul><li> Figure out which database to use </li>
 </ul>
   </td>
  </tr>
 </table>


<table>
  <tr>
    <td> Use Case ID:</td>
    <td colspan ="3"> 2 </td>
  </tr>
  <tr>
    <td> Use Case Name: </td>
    <td colspan ="3"> Store Name Card Info </td>
  <tr>
    <td> Created By: </td>
    <td> Jesus Franco, Lai Wei, Yifan Wang, Satoe Sakuma </td>
    <td> Last Updated By: </td>
    <td> Satoe Sakuma </td>
  </tr>
  <tr>
   <td> Date Created: </td>
   <td> October 31, 2016 </td>
   <td> Date Last Updated: </td>
   <td> October 31, 2016</td>
  </tr>
</table>   

<table> 
  <tr> 
   <td> Actors: </td>
   <td> Ambitious Job Seeker (User) </td>
  </tr>
  <tr>
    <td> Description: </td>
    <td> We are attempting to ideally have the user take a picture of the business card (if not then input the information) and we will then sort and store the contacts in a list format. </td>
  </tr>
  <tr>
    <td> Trigger: </td>
    <td> <ol>
      <li> 1. The user meets someone new and would like to keep them as a professional contact but not crowd up their default contact list.
      </li>
          <li> 2. The user gets a business card from an important person/ potential interviewer and would like to save it in an effective manner and in a safe place before it gets lost.
      </li>
     </ol>
     </td>
  </tr>
  <tr>
   <td> Preconditions: </td>
   <td> <ol><li> In order for this use case to execute, we need the user to have access to the information of the contact on a business card. If they do not have the business card, they may enter the information manualy. </li>
        <li> In order for this case to execute, the user must have a functional camera in their phone. 
 </li>
 <li>
  Again the authentication must be working properly so that only the users saved contacts are saved into the database. 

 </li>
        </ol>
   </td>
  </tr>
  <tr>
   <td> Postconditions: </td>
   <td> <ol><li> Add to the list of previous contacts in the list that users can scroll through. </li> 
   <li>
   Keeps an electronic Version of the business card.
   </li>
   </ol>
        </td>
  </tr>
  <tr>
    <td> Normal Flow: </td>
    <td> 2.0. User has met someone new and has gotten a business card. <br>
         2.1 Clicks on the camera command button. <br>
         2.2 Camera with the scanner scans the card. <br>
         2.3 Finds the address, phone number, name, and email address. <br>
         2.4 program displays the info it will save <br>
         2.5 The user makes any necessary changes and confirms the data <br>
         2.6 Updates the database with the new info <br>
         </td>
  </tr>
  <tr>  
   <td> Alternative Flows: </td>
   <td> 2.0. User can input information manually. <br>
        2.1 Click the choice to manually enter such information. <br>
        2.2 Database is updated based on information. <br>
   </td>
  <tr>
  <tr>  
   <td> Exceptions: </td>
   <td> 2.1 E.0. Contact did not get business card, but would like to still save their information by asking the contact to fill in the needed information. System has option to input manually.  <br>
        2.1 E.1. User's camera is not working. System will ask to manually insert. <br>
        2.1 E.2 The Camera scanner cannot find the information on the card. The user is given the option to add the information themselves manually or to try again. <br>

     </td>
  </tr>
  <tr>  
   <td> Includes: </td>
   <td> <ol><li> Locate on Map </li>
     <li> Authenticate User </li>
     <li> Search for Contact </li>
     </ol>
   </td>
  </tr>
  <tr>  
   <td> Priority: </td>
   <td> High </td>
  </tr>
  <tr>  
   <td> Frequency of Use: </td>
   <td> 10 actions per user per hour at a career fair or networking event. Career fair should not last more than 3-5 hours. <br>
       Or 1 -5 times a week after a special meeting. <br>
   </td>
  </tr>
  <tr>  
   <td> Business Rules: </td>
   <td> Privacy Etiquette</td>
  </tr>
  <tr>  
   <td> Special Requirements: </td>
   <td> <ul><li> Card Scanner API must be functional with little error. </li>
   <li> The Card Scanner API must be able to identify the different information given in the card. 
   <li> Database must be big enough to store the contact information. </li></ul>
   </td>
  </tr>
  <tr>  
   <td> Assumptions: </td>
   <td> We assume that the user will remember to add contact in the database. </td>
  </tr>
  <tr>  
   <td> Notes and Issues: </td>
   <td> <ul><li> Understanding the camera API. </li>
 </ul>
   </td>
  </tr>
 </table>

<table>
  <tr>
    <td> Use Case ID:</td>
    <td colspan ="3"> 3 </td>
  </tr>
  <tr>
    <td> Use Case Name: </td>
    <td colspan ="3"> Send Notification </td>
  <tr>
    <td> Created By: </td>
    <td> Jesus Franco, Lai Wei, Yifan Wang, Satoe Sakuma </td>
    <td> Last Updated By: </td>
    <td> Satoe </td>
  </tr>
  <tr>
   <td> Date Created: </td>
   <td> October 31, 2016 </td>
   <td> Date Last Updated: </td>
   <td> October 31, 2016</td>
  </tr>
</table>   

<table> 
  <tr> 
   <td> Actors: </td>
   <td> Ambitious Job Seeker (User) </td>
  </tr>
  <tr>
    <td> Description: </td>
    <td> We look to have notifications send to the user's device at the frequency they chose to reach out to a specific contact, which will remind the user to keep their professional contacts close. </td>
  </tr>
  <tr>
    <td> Trigger: </td>
    <td> <ol>
      <li> User has set to reach out to contact every x months, it is approaching x months since the last point of contact. </li>
      <li> It is the contact's birthday or some other special day, and user has set to reach out on those days.</li> </ol>
     </td>
  </tr>
  <tr>
   <td> Preconditions: </td>
   <td> <ol><li> In order for this use case to execute, user should have already specified how often they would like to reach out. </li>
        <li> User authentication must be working properly to ensure the user's contacts to be displayed. </li> 
        <li> The user's push notifications must be turned on. </li></ol>
   </td>
  </tr>
  <tr>
   <td> Postconditions: </td>
   <td> <ol><li> To keep track of when you last contacted this contact and update any changes of the contacts  </li> </ol>
        </td>
  </tr>
  <tr>
    <td> Normal Flow: </td>
    <td> 3.0. User is notified to reach out to contact due to time span specified or special day. <br>
         3.1. User will handwrite a note or use one of our templates to send email. <br>
         3.2 User will confirm that they are still professionally connected </td>
         
  </tr>
  <tr>  
   <td> Alternative Flows: </td>
   <td> 3.0. User wants to reach out even though it has not been a specific amount of time.  </td>
  <tr>
  <tr>  
   <td> Exceptions: </td>
   <td> 3.3 E.0. User confirms they have reached out even though they haven't.  <br>
        3.3 E.1. User does not reach out and reports that they haven't when asked for confirmation. System will remind them again in the next couple days.<br>
     
     </td>
  </tr>
  <tr>  
   <td> Includes: </td>
   <td> <ol><li> Store name card information. </li>
     <li> Authenticate User </li>
     <li> Search for Contact </li>
     </ol>
   </td>
  </tr>
  <tr>  
   <td> Priority: </td>
   <td> Medium </td>
  </tr>
  <tr>  
   <td> Frequency of Use: </td>
   <td> However often user sets to send notifications. I would assume at least once a year for each contact per person. </td>
  </tr>
  <tr>  
   <td> Business Rules: </td>
   <td> Privacy Etiquette</td>
  </tr>
  <tr>  
   <td> Special Requirements: </td>
   <td> <ul><li> The push notification function on the phone must be functional.</li>
   <li> </li></ul>
   </td>
  </tr>
  <tr>  
   <td> Assumptions: </td>
   <td> We assume that the user wants to stay in contact and receive notifications to do so. </td>
  </tr>
  <tr>  
   <td> Notes and Issues: </td>
   <td> <ul><li> Figure out how to use notification function default on the phone. </li>
 </ul>
   </td>
  </tr>
 </table>





















<table>
  <tr>
    <td> Use Case ID:</td>
    <td colspan ="3"> 4 </td>
  </tr>
  <tr>
    <td> Use Case Name: </td>
    <td colspan ="3"> Locate Contacts on Map </td>
  <tr>
    <td> Created By: </td>
    <td> Jesus Franco, Lai Wei, Yifan Wang, Satoe Sakuma </td>
    <td> Last Updated By: </td>
    <td> Satoe Sakuma </td>
  </tr>
  <tr>
   <td> Date Created: </td>
   <td> October 2, 2016 </td>
   <td> Date Last Updated: </td>
   <td> October 4, 2016</td>
  </tr>
</table>   

<table> 
  <tr> 
   <td> Actors: </td>
   <td> Ambitious Job Seeker (User) </td>
  </tr>
  <tr>
    <td> Description: </td>
    <td> We are aiming to have the user visualize the location and the outcome will be that the user will get 
    directions on the map to the destination. </td>
  </tr>
  <tr>
    <td> Trigger: </td>
    <td> <ol>
      <li> The user has an interview with the employer and would like to find the location without typing in the address.
      The information would already be saved in the contact database.  </li>
      <li> The user could be traveling to a new city and would like to meet up with old professional contacts nearby.</li> </ol>
     </td>
  </tr>
  <tr>
   <td> Preconditions: </td>
   <td> <ol><li> In order for this use case to execute, we need the contacts' information saved in the database.  </li>
        <li> User authentication must be working properly to ensure the user's contacts to display in maps. </li> 
        <li> The user must be in a location where the GPS is working.</li></ol>
   </td>
  </tr>
  <tr>
   <td> Postconditions: </td>
   <td> <ol><li> To keep track of when you last visited this contact, when the user plans to visit, the last visited database needs to be updated.  </li>
        <li> After the visit, the timer will be set for notifying the user to ensure follow up (ex. Thank you letter). </li></ol>
   </td>
  </tr>
  <tr>
    <td> Normal Flow: </td>
    <td> 4.0. User has meeting and selects contact they have to meet with <br>
    4.1. Clicks on map <br>
    4.2. Map locates destination <br>
    4.3. Displays route, time, and contact person <br>
    4.4. Confirms transportation method <br>
    4.5. Updates last visited database <br>
    4.6. Sets timer for notification </td>
  </tr>
  <tr>  
   <td> Alternative Flows: </td>
   <td> 4.0. User goes straight to map without selecting contact. System will respond with all contacts near the user. </td>
  <tr>
  <tr>  
   <td> Exceptions: </td>
   <td> 4.2 E.0 The user does not have contact address. User will be given an option to call the contact. <br>
        4.3 E.0. User does not have access to GPS. System will just show destination without the route to the location.<br>
        4.5 E.0. Meeting gets canceled. System will have to ask if the meeting was completed before 4.5 in flow. 
        </td>
  </tr>
  <tr>  
   <td> Includes: </td>
   <td> <ol><li> Store name card information. </li>
     <li> Search for contact </li>
     <li> Confirm Completion </li>
     </ol>
   </td>
  </tr>
  <tr>  
   <td> Priority: </td>
   <td> High </td>
  </tr>
  <tr>  
   <td> Frequency of Use: </td>
   <td> If all of BU is in our user pool, then we estimate about 3 or 4 people would utilize this use case per hour. This average is limited to working hours (Monday-Friday: 9am - 7pm). </td>
  </tr>
  <tr>  
   <td> Business Rules: </td>
   <td> Privacy Etiquette</td>
  </tr>
  <tr>  
   <td> Special Requirements: </td>
   <td> <ul><li> Card Scanner API must be functional with little error. </li>
    <li> Due to card scanner and using Google API, we expect the user to have good battery life. </li></ul>
   </td>
  </tr>
  <tr>  
   <td> Assumptions: </td>
   <td> We assume that the user places high importance on their schedule, but has poor sense of direction. We are also assuming that the user is highly efficient with their time. </td>
  </tr>
  <tr>  
   <td> Notes and Issues: </td>
   <td> <ul><li> Figure out how to implement the card scanner API: Jesus and Yifan: DUE DATE? </li>
   <li> Create accounts for each user: Jesus, Lai Wei, Yifan, Satoe: DUE DATE? </li>
   <li> Clarify Alt flow, Priority, and Normal Flow: Satoe: October 4th, 2016 </li>
   </ul>
   </td>
  </tr>
 </table>
  
  
  <table>
  <tr>
    <td> Use Case ID:</td>
    <td colspan ="3"> 5 </td>
  </tr>
  <tr>
    <td> Use Case Name: </td>
    <td colspan ="3"> Authenticate User</td>
  <tr>
    <td> Created By: </td>
    <td> Jesus Franco, Lai Wei, Yifan Wang, Satoe Sakuma </td>
    <td> Last Updated By: </td>
    <td> Satoe Sakuma </td>
  </tr>
  <tr>
   <td> Date Created: </td>
   <td> October 31, 2016 </td>
   <td> Date Last Updated: </td>
   <td> October 31, 2016</td>
  </tr>
</table>   

<table> 
  <tr> 
   <td> Actors: </td>
   <td> Ambitious Job Seeker (User) </td>
  </tr>
  <tr>
    <td> Description: </td>
    <td> Due to storing contact information being personal information, we are looking for ways to make sure to authenticate the user so that random people will not be able to access contacts' information.. </td>
  </tr>
  <tr>
    <td> Trigger: </td>
    <td> <ol>
      <li> The user would like to use the application and get access to the stored contacts. </li>
      </ol>
     </td>
  </tr>
  <tr>
   <td> Preconditions: </td>
   <td> <ol><li> User knows his/her usernmae and password.  </li>
  </ol>
   </td>
  </tr>
  <tr>
   <td> Postconditions: </td>
   <td> <ol><li> Keep a log file of when user had successful and unsuccessful login attempts. </li> </ol>
        </td>
  </tr>
  <tr>
    <td> Normal Flow: </td>
    <td> 5.0. User wants to get access to their contacts <br>
         5.1. User types in credentials for their account <br>
         5.2. System displays contacts </td>
  </tr>
  <tr>  
   <td> Alternative Flows: </td>
   <td> 5.0. User did not close the application, which would not require an additional log in. </td>
  <tr>
  <tr>  
   <td> Exceptions: </td>
   <td> 5.1 E.0. User forgets credentials. System will have a forgot username/password link. <br>
        5.1 E.1. User inputs the wrong credentials. Deny access.<br>
     
     </td>
  </tr>
  <tr>  
   <td> Includes: </td>
   <td> <ol><li> Store name card information. </li>
     </ol>
   </td>
  </tr>
  <tr>  
   <td> Priority: </td>
   <td> High </td>
  </tr>
  <tr>  
   <td> Frequency of Use: </td>
   <td> For all the other use cases, user must first authenticate, which means the frequency is the sum of all other use cases. This would look something like standard usage with spikes of usage during networking events. </td>
  </tr>
  <tr>  
   <td> Business Rules: </td>
   <td> Privacy Etiquette</td>
  </tr>
  <tr>  
   <td> Special Requirements: </td>
   <td> <ul><li> Database is robust and does not allow injections </li>
  </ul>
   </td>
  </tr>
  <tr>  
   <td> Assumptions: </td>
   <td> We assume that the user will remember their credentials and will not maliciously attack the login page. </td>
  </tr>
  <tr>  
   <td> Notes and Issues: </td>
   <td> <ul><li> Learn how to implement a secure login page. </li>
 </ul>
   </td>
  </tr>
 </table>

## Revision History

| Name                         | Date           | Reason for Changes         |Version|
| ---------------------------- |:--------------:|:--------------------------:|:------|
| Jesus, Lai Wei, Yifan, Satoe |October 2, 2016 | Date Created               | 1     |
| Satoe                        |October 3, 2016 | Edited Paragraph           | 2     |
| Satoe                        |October 4, 2016 | Edited Flows and Exception | 3     |
| Frank                        |October 4, 2016 | Edited Paragraph           | 4     |
| Satoe                        |October 30, 2016| Added Use Case 2,3,5       | 5     |
