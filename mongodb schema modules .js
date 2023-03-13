// User information
const users = {
  _id: ObjectId,
  name: String,
  email: String,
  phone_number: String,
  department: String,
  designation: String,
  location: String,
  role: String,
};

// Employee Information Management:

const employee = {
  _id: ObjectId,
  name: String,
  address: String,
  role: String,
  contact_details: {
    email: String,
    phone: String,
  },
  job_details: {
    designation: String,
    department: String,
    location: String,
    salary: Number,
    employment_type: String,
  },
  employee_documents: {
    resume: String,
    offer_letter: String,
    id_proof: String,
  },
  emergency_contact: {
    name: String,
    relationship: String,
    phone: String,
  },
  education_details: [
    {
      degree: String,
      institution: String,
      year: Number,
    },
  ],
  work_experience: [
    {
      company: String,
      designation: String,
      duration: String,
    },
  ],
  performance_data: [
    {
      date: Date,
      metric: String,
      value: Number,
    },
  ],
};

// Recruitment Management
const recruitment = {
  _id: ObjectId,
  job_title: String,
  job_description: String,
  job_responsibilities: [String],
  job_requirements: [String],
  candidates: [
    {
      name: String,
      email: String,
      resume: String,
      status: String,
      interview_schedule: {
        date: Date,
        time: String,
        interviewer: String,
        location: String,
      },
      job_offer: {
        salary: Number,
        benefits: [String],
        start_date: Date,
      },
    },
  ],
};

//  Performance Management:
const performance = {
  _id: ObjectId,
  employee_id: ObjectId,
  goals: [
    {
      title: String,
      description: String,
      due_date: Date,
      kpis: [String],
    },
  ],
  feedback: [
    {
      date: Date,
      feedback_type: String,
      feedback_details: String,
      feedback_by: String,
    },
  ],
  self_evaluation: [
    {
      date: Date,
      goal: String,
      rating: Number,
      comments: String,
    },
  ],
  peer_evaluation: [
    {
      date: Date,
      goal: String,
      rating: Number,
      comments: String,
      peer_name: String,
    },
  ],
  performance_review: [
    {
      date: Date,
      rating: Number,
      comments: String,
      reviewer_name: String,
    },
  ],
};
//  Learning and Development:
const learnAndDev = {
  _id: ObjectId,
  course_name: String,
  instructor: String,
  date: Date,
  time: String,
  location: String,
  participants: [
    {
      employee_id: ObjectId,
      status: String,
      feedback: String,
      certification_details: {
        certification_name: String,
        certification_date: Date,
      },
    },
  ],
};
//  Compensation and Benefits:
const benifits = {
  _id: ObjectId,
  employee_id: ObjectId,
  salary: Number,
  taxes_and_deductions: {
    federal_tax: Number,
    state_tax: Number,
    social_security: Number,
    medicare: Number,
  },
  bonuses: [
    {
      title: String,
      amount: Number,
      date: Date,
    },
  ],
  benefits: [
    {
      benefit_name: String,
      enrollment_date: Date,
      coverage_start_date: Date,
      coverage_end_date: Date,
    },
  ],
};
//  Time and Attendance Management

const timeAndAttendance = {
  _id: ObjectId,
  employee_id: ObjectId,
  date: Date,
  time_in: Date,
  time_out: Date,
  hours_worked: Number,
  overtime_hours: Number,
  leave_hours: Number,
  absences: Number,
  late_comings: Number,
  early_leavings: Number,
};
//  Leave Management:

const leaves = {
  _id: ObjectId,
  employee_id: ObjectId,
  requester_role: String,
  leave_type: String,
  start_date: Date,
  end_date: Date,
  number_of_days: Number,
  leave_balance: Number,
  leave_status: String,
  leave_reason: String,
};
//  Analytics & Reporting:

const analytics = {
  _id: ObjectId,
  report_name: String,
  report_type: String,
  filters: {
    start_date: Date,
    end_date: Date,
    employee_id: ObjectId,
    department: String,
    location: String,
  },
  data: [
    {
      employee_id: ObjectId,
      name: String,
      department: String,
      location: String,
      metric_1: Number,
      metric_2: Number,
      metric_3: Number,
    },
  ],
};
