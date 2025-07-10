
import React from 'react';
import { useState } from 'react';
import { SectionProps, SolutionItem } from '../types';
import { SOLUTION_ITEMS } from '../constants';
import SectionContainer from '../components/ui/SectionContainer';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { ChevronRightIcon } from '../components/icons/ChevronIcons';
import Modal from '../components/ui/Modal';

interface SolutionCardProps extends SolutionItem {
  onLearnMore: () => void;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ imageUrl, title, description, tags, onLearnMore }) => (
  <Card className="flex flex-col h-full bg-white"> {/* Explicitly white card bg */}
    <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6 flex flex-col flex-grow card-content"> {/* Wrapper for text content styling */}
      <h3 className="text-xl font-semibold text-neutral-dark mb-2">{title}</h3>
      <p className="text-neutral-medium text-sm leading-relaxed mb-4 flex-grow">{description}</p>
      <div className="mb-4">
        {tags.map(tag => (
          <span key={tag} className="inline-block bg-primary/10 text-neutral-dark text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded-full border border-primary/20">
            {tag}
          </span>
        ))}
      </div>
      <Button onClick={onLearnMore} variant="outline" size="sm" className="mt-auto self-start group text-primary border-primary hover:text-white hover:bg-primary">
        Learn More <ChevronRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </Button>
    </div>
  </Card>
);

const SolutionsSection: React.FC<SectionProps> = ({ id }) => {
  const [selectedSolution, setSelectedSolution] = useState<SolutionItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLearnMore = (solution: SolutionItem) => {
    setSelectedSolution(solution);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSolution(null);
  };

  return (
    <>
    <SectionContainer id={id} className="bg-neutral-very-light" hasPattern>
      <SectionTitle 
        title="Tailored Solutions for Local Government" 
        subtitle="Practical Applications" 
        className="text-neutral-dark"
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SOLUTION_ITEMS.map((item) => (
          <SolutionCard key={item.title} {...item} onLearnMore={() => handleLearnMore(item)} />
        ))}
      </div>
      <div className="text-center mt-12">
        <Button href="#contact" variant="primary" size="lg">
          Discuss Your Project
        </Button>
      </div>
    </SectionContainer>
    
    <Modal
      isOpen={isModalOpen}
      onClose={closeModal}
      title={selectedSolution?.title || ''}
    >
      {selectedSolution?.title === 'Data Analytics for Smart Cities' ? (
        <div className="prose prose-lg max-w-none">
          <h3 className="text-xl font-semibold text-neutral-dark mb-4">
            Data Analytics: The Brains Behind Smart City Initiatives
          </h3>
          <p className="text-neutral-dark mb-6 leading-relaxed">
            The concept of a "smart city" is rapidly evolving, driven by the power of data analytics to understand urban dynamics, optimize resources, and improve services. Data analytics transforms raw sensor readings and transactional records into actionable insights that inform policy and real-time decision-making.
          </p>
          
          <h4 className="text-lg font-semibold text-neutral-dark mb-3">
            Reducing Traffic Congestion:
          </h4>
          <p className="text-neutral-dark mb-6 leading-relaxed">
            Data from GPS, road sensors, and public transit are analyzed to predict traffic, identify hotspots, and enable dynamic signal timing. This optimizes public transport routes and guides smart parking, significantly easing urban traffic flow and reducing pollution.
          </p>
          
          <h4 className="text-lg font-semibold text-neutral-dark mb-3">
            Measuring and Improving Air Quality:
          </h4>
          <p className="text-neutral-dark mb-6 leading-relaxed">
            Networks of low-cost sensors, combined with meteorological and traffic data, create real-time air quality maps. Predictive models forecast pollution spikes, allowing cities to issue targeted advisories or implement temporary traffic restrictions, leading to healthier urban environments.
          </p>
          
          <h4 className="text-lg font-semibold text-neutral-dark mb-3">
            Predicting Transportation Infrastructure Maintenance:
          </h4>
          <p className="text-neutral-dark mb-6 leading-relaxed">
            IoT sensors on bridges and roads, alongside historical repair data, enable predictive maintenance. Machine learning detects early signs of fatigue or degradation, forecasting when maintenance is needed before failure occurs. This proactive approach prevents costly emergency repairs, extends infrastructure lifespan, and minimizes disruptions.
          </p>
          
          <p className="text-neutral-dark font-medium leading-relaxed">
            In essence, data analytics is the fundamental capability that transforms isolated data points into urban intelligence. It empowers city leaders to build more efficient, sustainable, resilient, and livable cities for future generations.
          </p>
        </div>
      ) : selectedSolution?.title === 'GenLLM-Powered Public Services' ? (
        <div className="prose prose-lg max-w-none">
          <h3 className="text-xl font-semibold text-neutral-dark mb-4">
            GenLLMs: Transforming Citizen-Government Interactions
          </h3>
          <p className="text-neutral-dark mb-6 leading-relaxed">
            Generative Large Language Models (GenLLMs) are transforming how citizens interact with public services. By powering advanced chatbots, GenLLMs can revolutionize public works service delivery, making information more accessible, processes more efficient, and citizen engagement more effective. These AI-driven tools can understand natural language, provide instant and personalized answers, and even help citizens submit and track requests, drastically improving responsiveness and overall satisfaction.
          </p>
          
          <h4 className="text-lg font-semibold text-neutral-dark mb-3">
            1. Waste Management Services:
          </h4>
          <p className="text-neutral-dark mb-4 leading-relaxed">
            GenLLM-powered chatbots can serve as a comprehensive, always-on resource for waste management inquiries.
          </p>
          <ul className="text-neutral-dark mb-6 leading-relaxed list-disc pl-6 space-y-2">
            <li><strong>Understanding Complex Queries:</strong> Citizens can ask questions in plain language, like "What day is my recycling picked up?", "Can I recycle old batteries?", or "My trash wasn't picked up, what do I do?". The chatbot, powered by a GenLLM, can accurately interpret these diverse queries.</li>
            <li><strong>Providing Specific Information:</strong> The chatbot can instantly provide detailed schedules based on location, offer guidelines on what is recyclable, hazardous waste disposal instructions, and even explain local regulations without requiring citizens to navigate complex websites or wait on hold.</li>
            <li><strong>Handling Service Requests:</strong> If a trash pickup is missed, the chatbot can guide the citizen through submitting a service request, collecting necessary details like address, date, and description of the issue. It can then integrate with internal city systems to log the complaint and provide a reference number.</li>
          </ul>
          
          <h4 className="text-lg font-semibold text-neutral-dark mb-3">
            2. When Can Citizens Have Their Requests Addressed:
          </h4>
          <p className="text-neutral-dark mb-4 leading-relaxed">
            One of the most common frustrations for citizens is not knowing the status or expected resolution time for their submitted requests. GenLLM chatbots can provide unprecedented transparency and real-time updates.
          </p>
          <ul className="text-neutral-dark mb-6 leading-relaxed list-disc pl-6 space-y-2">
            <li><strong>Real-time Status Updates:</strong> After a citizen submits a request (e.g., for pothole repair, streetlight outage, missed trash pickup), they can simply ask the chatbot, "What's the status of my pothole request?" or "When will the tree near my house be trimmed?". The chatbot can then query the city's work order or customer relationship management (CRM) systems and provide an immediate update, including current status and estimated completion date.</li>
            <li><strong>Managing Expectations:</strong> Based on historical data and current workload, the GenLLM can even provide estimated wait times or next steps, helping to manage citizen expectations effectively and reduce follow-up calls to overloaded call centers.</li>
            <li><strong>Automated Notifications:</strong> Chatbots can be configured to proactively notify citizens via text or email when their request status changes, further reducing the need for manual inquiries.</li>
          </ul>
          
          <h4 className="text-lg font-semibold text-neutral-dark mb-3">
            3. Broader Public Works Service Delivery:
          </h4>
          <p className="text-neutral-dark mb-4 leading-relaxed">
            The application of GenLLMs extends to nearly every aspect of public works:
          </p>
          <ul className="text-neutral-dark mb-6 leading-relaxed list-disc pl-6 space-y-2">
            <li><strong>Roads and Infrastructure:</strong> Citizens can report issues like potholes, damaged signs, or sidewalk cracks by describing them naturally. The chatbot can then log these, ask clarifying questions, and provide updates.</li>
            <li><strong>Water and Sewer Services:</strong> For issues like water main breaks, low water pressure, or sewer backups, the chatbot can provide immediate guidance, answer FAQs, and escalate critical reports to emergency services.</li>
            <li><strong>Parks and Recreation:</strong> Inquiries about park hours, facility bookings, maintenance issues (e.g., broken playground equipment), or event schedules can be handled instantly by the chatbot.</li>
            <li><strong>Permitting and Licensing:</strong> While complex, chatbots can guide citizens through common permitting requirements, answer questions about necessary documents, and direct them to the correct application portals, streamlining initial interactions.</li>
          </ul>
          
          <h4 className="text-lg font-semibold text-neutral-dark mb-3">
            Implementation Considerations:
          </h4>
          <p className="text-neutral-dark mb-4 leading-relaxed">
            While the benefits are clear, successful implementation of GenLLM-powered chatbots requires:
          </p>
          <ul className="text-neutral-dark mb-6 leading-relaxed list-disc pl-6 space-y-2">
            <li><strong>Robust Data Integration:</strong> The chatbot needs seamless access to various city databases (e.g., waste schedules, work order systems, GIS data) to provide accurate, real-time information.</li>
            <li><strong>Training and Fine-tuning:</strong> While GenLLMs are powerful, they need to be fine-tuned with specific public works knowledge and common citizen query patterns to ensure highly relevant and accurate responses.</li>
            <li><strong>Security and Privacy:</strong> Ensuring the secure handling of citizen data and maintaining privacy is paramount.</li>
            <li><strong>Human Escalation:</strong> Chatbots should always have a clear escalation path to a human agent for complex, sensitive, or unresolved issues.</li>
          </ul>
          
          <p className="text-neutral-dark font-medium leading-relaxed">
            By leveraging GenLLMs, public works departments can create a more accessible, responsive, and citizen-centric service delivery model, ultimately building stronger, more efficient smart cities.
          </p>
        </div>
      ) : selectedSolution?.title === 'AI-Powered Public Safety' ? (
        <div className="prose prose-lg max-w-none">
          <h3 className="text-xl font-semibold text-neutral-dark mb-4">
            AI and Predictive Analytics: Transforming Urban Safety
          </h3>
          <p className="text-neutral-dark mb-6 leading-relaxed">
            Artificial Intelligence (AI) and predictive analytics are at the forefront of creating safer urban environments. These advanced technologies leverage vast datasets to identify patterns, forecast future events, and enable proactive interventions across various public safety domains, moving cities beyond traditional reactive measures.
          </p>
          
          <h4 className="text-lg font-semibold text-neutral-dark mb-3">
            Enhancing Traffic Safety:
          </h4>
          <p className="text-neutral-dark mb-4 leading-relaxed">
            AI and predictive analytics are vital for reducing road accidents and improving traffic flow. By analyzing historical accident data, traffic volumes, weather conditions, road infrastructure, and even driver behavior patterns, AI models can:
          </p>
          <ul className="text-neutral-dark mb-6 leading-relaxed list-disc pl-6 space-y-2">
            <li><strong>Predict Accident Hotspots:</strong> Identify specific intersections or road segments with a high probability of future collisions.</li>
            <li><strong>Optimize Signal Timing:</strong> Dynamically adjust traffic signals to prevent conflicts and reduce congestion, a known contributor to accidents.</li>
            <li><strong>Detect Dangerous Driving:</strong> Use computer vision from cameras to identify reckless driving, sudden braking, or lane weaving, enabling timely interventions.</li>
            <li><strong>Inform Infrastructure Improvements:</strong> Data-driven insights guide decisions on where to add speed cameras, redesign intersections, or improve signage.</li>
          </ul>
          
          <h4 className="text-lg font-semibold text-neutral-dark mb-3">
            Other Public Safety Applications:
          </h4>
          <p className="text-neutral-dark mb-4 leading-relaxed">
            Beyond traffic, AI and predictive analytics play a critical role in broader urban safety:
          </p>
          <ul className="text-neutral-dark mb-6 leading-relaxed list-disc pl-6 space-y-2">
            <li><strong>Predictive Policing:</strong> Analyzing historical crime data, socioeconomic factors, and environmental conditions to forecast where and when certain types of crime are most likely to occur, allowing for optimized patrol deployment. This aims to deter crime and improve response times.</li>
            <li><strong>Optimizing Emergency Response:</strong> Predicting demand for emergency services (fire, ambulance) based on historical incidents, events, and demographic data. This helps pre-position resources and optimize dispatch routes, ensuring faster response times during critical situations.</li>
            <li><strong>Crowd Management & Event Safety:</strong> AI-powered video analytics can monitor crowd density and movement in real-time during large gatherings, identifying potential bottlenecks or unusual behavior that could lead to stampedes or other safety hazards.</li>
            <li><strong>Disaster Preparedness:</strong> Analyzing weather patterns, infrastructure vulnerability, and population density to predict the impact of natural disasters (e.g., floods, heatwaves) and inform early warning systems and evacuation plans.</li>
          </ul>
          
          <p className="text-neutral-dark font-medium leading-relaxed">
            By integrating AI and predictive analytics into their operational frameworks, smart cities can anticipate threats, optimize resource allocation, and implement targeted interventions, creating more secure and resilient urban landscapes for all.
          </p>
        </div>
      ) : (
        <p className="text-neutral-dark">
          {selectedSolution?.description}
        </p>
      )}
    </Modal>
    </>
  );
};

export default SolutionsSection;