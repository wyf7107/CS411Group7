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


## Use Case Template
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
    <td> 
      1. The user has an interview with the employer and would like to find the location without typing in the address.
      The information would already be saved in the contact database.  
      2. The user could be traveling to a new city and would like to meet up with old professional contacts nearby.
     </td>
  </tr>
  <tr>
   <td> Preconditions: </td>
   <td> 1. In order for this use case to execute, we need the contacts' information saved in the database.  
        2. User authentication must be working properly to ensure the user's contacts to display in maps.  
        3. The user must be in a location where the GPS is working.
   </td>
  </tr>
  <tr>
   <td> Postconditions: </td>
   <td> 1. To keep track of when you last visited this contact, when the user plans to visit, the last visited database needs to be updated.  
        2. After the visit, the timer will be set for notifying the user to ensure follow up (ex. Thank you letter). 
   </td>
  </tr>
 </table>
  
    
