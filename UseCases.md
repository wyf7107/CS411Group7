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
     <li>  </li>
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
      <li> The user meets someone new and would like to keep them as a professional contact but not crowd up their default contact list.  </li>
     </ol>
     </td>
  </tr>
  <tr>
   <td> Preconditions: </td>
   <td> <ol><li> In order for this use case to execute, we need the user to have access to the information of the contact. </li>
        <li> The camera on the phone is functioning. </li> 
        </ol>
   </td>
  </tr>
  <tr>
   <td> Postconditions: </td>
   <td> <ol><li> Add to the list of previous contacts in the list that users can scroll through. </li> </ol>
        </td>
  </tr>
  <tr>
    <td> Normal Flow: </td>
    <td> 1.0. User has met someone new and has gotten a business card. <br>
         1.1. User will either take a picture of business card. <br>
         1.2 Contact name will appear on the list with option to see more of their info.</td>
  </tr>
  <tr>  
   <td> Alternative Flows: </td>
   <td> 1.0. User can input information manually.</td>
  <tr>
  <tr>  
   <td> Exceptions: </td>
   <td> 1.1 E.0. Contact did not get business card, but would like to still save their information by asking the contact to fill in the needed information. System has option to input manually.  <br>
        1.1 E.1. User's camera is not working. System will ask to manually insert. <br>
     
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
   <td> 10 actions per user per hour at a career fair or networking event. /td>
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
  
## Revision History

| Name                         | Date           | Reason for Changes         |Version|
| ---------------------------- |:--------------:|:--------------------------:|:------|
| Jesus, Lai Wei, Yifan, Satoe |October 2, 2016 | Date Created               | 1     |
| Satoe                        |October 3, 2016 | Edited Paragraph           | 2     |
| Satoe                        |October 4, 2016 | Edited Flows and Exception | 3     |
| Frank                        |October 4, 2016 | Edited Paragraph           | 4     |
| Satoe                        |October 30, 2016| Added Use Case 2           | 5     |
