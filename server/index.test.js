import request from "supertest";
import app from "./index";

describe("Event Controller", () => {
  // Assuming your Express app is started and listening
  beforeAll(async () => {
    // Start your Express app or perform any setup
  });

  afterAll(async () => {
    // Close your Express app or perform any teardown
  });

  // Test getEvents
  describe("GET /events", () => {
    it("should get all events", async () => {
      const response = await request(app).get("/api/events/");
      expect(response.status).toBe(200);
      expect(response.body).toEqual(expect.any(Array));
    });
  });

  // Test getEvent
  describe("GET /events/:id", () => {
    it("should get a single event", async () => {
      const response = await request(app).get(
        "/api/events/655c6cfe06878f96592bb599/"
      );
      expect(response.status).toBe(200);
      expect(response.body).toEqual(expect.any(Object));
    });
  });

  // Test setEvent
  describe("POST /events", () => {
    it("should create a new event", async () => {
      const newEvent = {
        title: "Test Event!",
        description: "This is a test event",
        startDate: "2023-11-28",
        endDate: "2023-11-28",
        location: "TestLocation",
        runtime: "TestRuntime",
        ageRating: "12",
        language: "TestLanguage",
        image: "e7",
        banner: "63",
        tickets: {
          price: "200",
          availableTickets: "5000",
        },
        genre: "Test Genre",
        artist: "Test Artist,Test Artist2",
        latitude: "TestLatitude",
        longitude: "TestLongitude",
      };

      const response = await request(app)
        .put("/api/events/setEvent/655f9f0395c574308b847906/")
        .send(newEvent);

      expect(response.status).toBe(200);
      // expect(response.body).toEqual("Event Added Succesfully");
    });
  });

  // Test deleteEvent
  describe("DELETE /events/:id", () => {
    it("should delete an event", async () => {
      const response = await request(app).delete(
        "/api/events/deleteEvent/65668613c45c9e6c793f9b9b"
      );
      expect(response.status).toBe(200);
    });
  });

  // Test updateEvent
  describe("PUT /events/:id", () => {
    it("should update an event", async () => {
      const updatedEvent = {
        title: "Testing Update Event!",
        description: "This is a test to make sure update event works",
      };
      const response = await request(app)
        .patch("/api/events/updateEvent/655c6cfe06878f96592bb599/")
        .send(updatedEvent);

      expect(response.status).toBe(200);
      expect(response.body).toEqual("Updated Succesfully");
    });
  });

  // Test registrationDetails
  // describe("POST /registrationDetails", () => {
  //   it("should register a user for an event", async () => {
  //     const registrationDetails = {
  //       userId: "65376b6b69c8b00b9956bc49",
  //       registrationDetails: {
  //         tickets: {
  //           price: 100,
  //           ticketsBought: 2,
  //         },
  //       },
  //     };

  //     const response = await request(app)
  //       .post("/api/registrationDetails/655e1be836dbd8605ad2de5c/")
  //       .send(registrationDetails);

  //     expect(response.status).toBe(200);
  //     expect(response.body).toEqual("Registration Succesfull");
  //   });
  // });
});
