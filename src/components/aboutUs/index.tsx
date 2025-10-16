import React from 'react';
import { Card } from '@/components/shared/Card';
import { Badge } from '@/components/shared/Badge';
import { Zap, Target, Eye, Users, Award, Car, Linkedin } from 'lucide-react';

import abhilashaImage from '@/untils/images/Abhilasha.jpg';
import gp4 from "@/untils/images/gp4.jpg"
import ajeetImg from '@/untils/images/Ajeet.png';
import ankitImg from '@/untils/images/ankit.jpg.png';
import manasiImg from '@/untils/images/Manasi.jpg';
import nikeshImg from '@/untils/images/nikesh  1.png';
import pritishImg from '@/untils/images/Pritish.jpg';
import ritikImg from '@/untils/images/ritik.jpeg';
import sohamImg from '@/untils/images/Soham .jpg';
import sushmitaImg from '@/untils/images/Sushmita.jpg';
import teamGroup1 from '@/untils/images/1738258039827.jpg';
import nexusAlumni from '@/untils/images/grp .jpg';
import formulaTeam from '@/untils/images/whatsapp-image-2025-01-13-at-193205-56e41b1b.jpg';
import yashDeep from '@/untils/images/Yashdeep.png';
import servesh from '@/untils/images/sarvesh.jpg';
import abhishek from '@/untils/images/Abhisekh.jpg';
import anish from '@/untils/images/Anees Ahmed Khan.jpg';
import Image from 'next/image';
import { useRouter } from 'next/router';

const boardMembers = [
  { name: 'Nikesh Bisht', image: nikeshImg, role: 'CEO', department: 'Business', linkedin: 'https://www.linkedin.com/in/nikeshbisht/' },
  { name: 'Sushmita Patil', image: sushmitaImg, role: 'COO', department: 'Business', linkedin: 'https://www.linkedin.com/in/sushmita-patil-687404219/' },
  { name: 'Ankit Kumar', image: ankitImg, role: 'CTO(M)', department: 'Technical', linkedin: 'https://www.linkedin.com/in/ankit-kumar-119396208/' },
  { name: 'Abhilasha Marmat', image: abhilashaImage, role: 'CTO(E)', department: 'Technical', linkedin: 'https://www.linkedin.com/in/abhilasha-marmat/' },
  { name: 'Yashdeep Singh', image: yashDeep, role: 'CPO', department: 'Technical', linkedin: 'https://www.linkedin.com/in/yashdeep0/' },
];

const coreTeam = [
  { name: 'Ritwik Mukherjee', image: ritikImg, role: 'Founding Engineer', department: 'Technical', fullTitle: 'Mechanical Systems', linkedin: 'https://www.linkedin.com/in/ritwik-mukherjee1/' },
  { name: 'Pritish Karmi', image: pritishImg, role: 'Automotive Designer', department: 'Technical', fullTitle: 'Design Lead', linkedin: 'https://www.linkedin.com/in/pritish-karmi-91124717b/' },
  { name: 'Manasi Korade', image: manasiImg, role: 'Business & Strategy', department: 'Business', fullTitle: "Founder's Office", linkedin: 'https://www.linkedin.com/in/manasi-korade-1949611a4/' },
  { name: 'Anees Ahmed Khan', image: anish, role: 'Founding Engineer', department: 'Technical', fullTitle: ' Electrical Systems', linkedin: 'https://www.linkedin.com/in/anees-ahmed-khan-01300b267/' },
  { name: 'Sarvesh Thopate', image: servesh, role: 'Mechanical Engineer', department: 'Technical', fullTitle: 'Engineering Support', linkedin: 'https://www.linkedin.com/in/sarvesh-kailas-thopate-65139523b/' },
  { name: 'Soham Patil', image: sohamImg, role: 'Firmware Engineer', department: 'Technical', fullTitle: 'Electronics Systems', linkedin: 'https://www.linkedin.com/in/soham-patil-660621225/' },
  { name: 'Ajeet Jangid', image: ajeetImg, role: 'Technical Associate', department: 'Technical', fullTitle: 'Engineering Support', linkedin: 'https://www.linkedin.com/in/ajeet-jangid-33b2bb1a5/' },
  { name: 'Abhishek Gour', image: abhishek, role: 'Technical Associate', department: 'Technical', fullTitle: 'Technical Associate', linkedin: 'https://www.linkedin.com/in/abhi-shek-1203b21b7/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
];
const About = () => {
  const router = useRouter()
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center py-20">
        <div className="absolute inset-0 bg-hero-gradient" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <Badge className="mb-6 bg-electric-blue/20 text-electric-blue border-electric-blue/30 hover:bg-electric-blue/30">
            <Zap className="w-4 h-4 mr-2" />
            From Formula Student to Fleet-First EV Platform
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            About <span className="text-gradient">Blinq</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
         Building a seamless zero-emission ecosystem powered by purpose-built vehicles, AI-driven battery swapping, and microfactories for sustainable urban mobility.

          </p>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-20 h-20 bg-electric-blue/20 rounded-full animate-float" />
        <div className="absolute bottom-32 right-16 w-16 h-16 bg-electric-cyan/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-10 w-12 h-12 bg-electric-green/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      </section>

      {/* Story Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
           <div className="space-y-8 animate-fade-in">
            <div>
              <Badge className="mb-4 bg-electric-cyan/20 text-electric-cyan border-electric-cyan/30 backdrop-blur-sm">
                <Award className="w-4 h-4 mr-2" />
                Our Story
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                From Racing Circuits to <span className="text-gradient">City Streets</span> 🚗⚡
              </h2>
            </div>
            
           <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
  <p className="hover:text-foreground/80 transition-colors">
    Blinq Mobility was founded in 2024 with a bold vision to make electric mobility the 
    <span className="text-primary font-semibold"> default choice for the masses</span>. 
    The company was started by 
     Nikesh, Ankit, Abhilasha, Sushmita, and Yashdeep, 
    with a common DNA.
  </p>

  <p className="hover:text-foreground/80 transition-colors">
    We were part of 
    <span className="text-electric-blue font-semibold"> IIT Delhi’s AXLR8R Formula Racing team</span>, 
    where we designed, built, and raced 
    <span className="text-electric-blue font-semibold"> Formula-style electric cars</span> 
    at international competitions. Those years on the racing circuit taught us far more than just speed. 
    We learned how to 
engineer reliable EVs from scratch, 
    lead diverse teams, manage limited resources like a startup, and innovate under pressure. 
    These lessons became the foundation for Blinq Mobility.
  </p>

  <p className="hover:text-foreground/80 transition-colors">
    Today, we are channeling that experience into the city streets. Our first product, the 
    Blinq Pod, is a lightweight, modular electric vehicle 
    with less than 5-minute swappable batteries, 
    built to deliver safe, comfortable, and affordable rides without the downtime of charging. 
    Starting with the ride-hailing market, 
    <span className="text-electric-blue font-semibold">
      we are creating technology that makes mobility more efficient for drivers, operators, and passengers alike
    </span>.
  </p>
</div>

          </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <Image 
                src={formulaTeam} 
                alt="Formula Student team building"
                className="rounded-2xl shadow-electric w-full aspect-[4/3] object-cover"
              />
              <Image 
                src={nexusAlumni} 
                alt="IIT Delhi Nexus Alumni Achievement"
                className="rounded-2xl shadow-accent w-full aspect-[4/3] object-cover"
              />
            </div>
            <div className="space-y-4">
              <Image 
                src={teamGroup1} 
                alt="Blinq founding team"
                className="rounded-2xl shadow-electric w-full aspect-[4/3] object-cover"
              />
              <Image 
                src={gp4} 
                alt="Team collaborating in workspace"
                className="rounded-2xl shadow-accent w-full aspect-[4/3] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
     
      {/* Team Section */}
  <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-electric-purple/20 text-electric-purple border-electric-purple/30">
              <Users className="w-4 h-4 mr-2" />
              Meet Our Team
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The <span className="text-gradient">Innovators</span> Behind Blinq
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A diverse team of engineers and visionaries united by our passion for sustainable mobility
            </p>
          </div>
          
          {/* Board of Directors */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Board of Directors</h3>
            <div className="relative">
              {/* Connecting lines background */}
              {/* <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                <div className="w-full h-px bg-electric-blue/30 relative">
                  <div className="absolute top-0 left-1/4 w-px h-16 bg-electric-blue/30 -translate-y-8"></div>
                  <div className="absolute top-0 left-2/4 w-px h-16 bg-electric-blue/30 -translate-y-8"></div>
                  <div className="absolute top-0 left-3/4 w-px h-16 bg-electric-blue/30 -translate-y-8"></div>
                </div>
              </div> */}
              
              <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
                {boardMembers.map((member, index) => (
                  <Card 
                    key={member.name}
                    className="p-6 bg-card-gradient border-2 border-electric-blue/30 hover:border-electric-blue/60 hover:shadow-electric transition-all duration-300 group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative mb-4">
                      <Image 
                        src={member.image} 
                        alt={member.name}
                        className="w-full aspect-square object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-electric-blue flex items-center justify-center">
                        <div className="w-2 h-2 bg-background rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="text-center ">
                      <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                      <p className="text-sm font-medium mb-1 text-electric-blue">{member.role}</p>
                     
                      <a 
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-8 h-8 md:w-9 md:h-9 bg-[#0A66C2] rounded-lg hover:bg-[#004182] hover:scale-110 transition-all duration-300 shadow-lg"
                    >
                      <Linkedin className="w-4 h-4 text-white fill-white" />
                    </a>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Core Team */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8">Core Team</h3>
            <div className="relative">
              {/* Department connecting lines */}
              <div className="absolute inset-0 flex justify-center items-start pointer-events-none pt-20">
                <div className="w-3/4 flex justify-between">
                  <div className="flex flex-col items-center">
                    <div className="w-px h-12 bg-electric-cyan/30"></div>
                    <div className="text-xs text-electric-cyan font-medium">Business</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-px h-12 bg-electric-purple/30"></div>
                    <div className="text-xs text-electric-purple font-medium">Technical</div>
                  </div>
                </div>
              </div>
              

 <div className="flex flex-wrap justify-center gap-6 relative z-10">
  {coreTeam.map((member, index) => (
    <Card
      key={member.name}
      className="p-6 bg-card-gradient border border-electric-blue/20 hover:border-electric-blue/40 hover:shadow-electric transition-all duration-300 group w-full sm:w-[280px] md:w-[300px] lg:w-[230px]"
      style={{ animationDelay: `${(index + 4) * 0.1}s` }}
    >
      <div className="relative mb-4">
        <Image
          src={member.image}
          alt={member.name}
          className="w-full aspect-square object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-electric-blue/60"></div>
      </div>

      <div className="text-center">
        <h3 className="font-semibold text-base mb-1">{member.name}</h3>
        <p className="text-sm font-medium mb-1 text-electric-blue">{member.role}</p>
        <p className="text-xs text-muted-foreground mb-4">{member.fullTitle}</p>

        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-8 h-8 md:w-9 md:h-9 bg-[#0A66C2] rounded-lg hover:bg-[#004182] hover:scale-110 transition-all duration-300 shadow-lg"
        >
          <Linkedin className="w-4 h-4 text-white fill-white" />
        </a>
      </div>
    </Card>
  ))}
</div>




            </div>
          </div>
        </div>
      </section>
        <section className="py-20 px-6 bg-gradient-to-b from-transparent via-card/30 to-transparent relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(120,119,198,0.05),transparent_70%)]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-electric-purple/20 text-electric-purple border-electric-purple/30 backdrop-blur-sm">
              <Award className="w-4 h-4 mr-2" />
              Media
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Reflecting our work culture and team spirit
            </p>
          </div>

          {/* Enhanced Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* <div className="relative group overflow-hidden rounded-2xl aspect-[4/3] animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <img 
                src="https://res.cloudinary.com/doze8mibh/image/upload/v1759684625/Copy_of_IMG_20250913_001938_beqffh.jpg" 
                alt="Blinq team culture"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </div> */}
            
            <div className="relative group overflow-hidden rounded-2xl aspect-[4/3] animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <img 
                src="https://res.cloudinary.com/doze8mibh/image/upload/v1759684625/Copy_of_IMG_20250913_104217_axphty.jpg" 
                alt="Team collaboration"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </div>
            
            <div className="relative group overflow-hidden rounded-2xl aspect-[4/3] animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <img 
                src="https://res.cloudinary.com/doze8mibh/image/upload/v1759684625/nexus_2_1_hlsayb.jpg" 
                alt="Nexus achievement"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </div>
            
            <div className="relative group overflow-hidden rounded-2xl aspect-[4/3] animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <img 
                src="https://res.cloudinary.com/doze8mibh/image/upload/v1759684625/WhatsApp_Image_2025-01-25_at_23.29.29_0fb77bce_y5tdyo.jpg" 
                alt="Innovation at work"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </div>
            
            <div className="relative group overflow-hidden rounded-2xl aspect-[4/3] animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <img 
                src="https://res.cloudinary.com/doze8mibh/image/upload/v1759684624/campus_fund_2_siirth.jpg" 
                alt="Campus funding milestone"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </div>
            
            <div className="relative group overflow-hidden rounded-2xl aspect-[4/3] animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <img 
                src="https://res.cloudinary.com/doze8mibh/image/upload/v1759684624/me_tboxar.jpg" 
                alt="Team member spotlight"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </div>
            
            <div className="relative group overflow-hidden rounded-2xl aspect-[4/3] animate-fade-in" style={{ animationDelay: '0.7s' }}>
              <img 
                src="https://res.cloudinary.com/doze8mibh/image/upload/v1759684624/Copy_of_WhatsApp_Image_2025-09-28_at_02.06.29_ee0d7390_xeajrd.jpg" 
                alt="Workshop moments"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </div>
            
            <div className="relative group overflow-hidden rounded-2xl aspect-[4/3] animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <img 
                src="https://res.cloudinary.com/doze8mibh/image/upload/v1759684623/boss_nbjz6g.jpg" 
                alt="Leadership"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </div>
            
            <div className="relative group overflow-hidden rounded-2xl aspect-[4/3] animate-fade-in" style={{ animationDelay: '0.9s' }}>
              <img 
                src="https://res.cloudinary.com/doze8mibh/image/upload/v1759684623/1738258039827_1_a9giq0.jpg" 
                alt="Team spirit"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-card/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-4xl font-bold mb-6">
            Join the <span className="text-gradient">Powering the Electric Revolution</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join us to design, build, and scale the EVs redefining how the world moves.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
            <button onClick={()=>{
              router.push("https://www.notion.so/Blinq-Build-the-Future-of-Mobility-With-Us-27853783cf5b807e90f9c9524c5393c6?source=copy_link")
            }} className="px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-secondary/80 transition-colors">
            Be Part of our Journey
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;