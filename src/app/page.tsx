export default function Home() {
  return (
    <div className="bg-background text-on-surface font-body-md antialiased min-h-screen flex flex-col">
      {/* TopNavBar */}
      <header className="bg-surface-container-lowest dark:bg-on-background border-b border-outline-variant dark:border-outline sticky top-0 z-50">
        <nav className="max-w-[1280px] mx-auto px-gutter flex justify-between items-center h-20">
          <div className="flex items-center gap-space-xl">
            <span className="text-h3 font-h3 font-bold text-primary dark:text-inverse-primary tracking-tight">SRHU</span>
            <div className="hidden md:flex items-center gap-space-lg">
              <a className="text-secondary dark:text-secondary-fixed-dim border-b-2 border-secondary dark:border-secondary-fixed-dim pb-1 font-label-md text-label-md hover:text-secondary transition-colors duration-200" href="#">Venue</a>
              <a className="text-on-surface-variant dark:text-surface-variant font-body-md font-label-md text-label-md hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200" href="#">Guest Booking</a>
              <a className="text-on-surface-variant dark:text-surface-variant font-body-md font-label-md text-label-md hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200" href="#">Car Booking</a>
            </div>
          </div>
          <div className="flex items-center gap-space-md">
            <button className="px-space-lg py-space-sm bg-primary text-on-primary font-label-md text-label-md rounded-lg active:opacity-80 active:scale-95 transition-all">Admin</button>
          </div>
        </nav>
      </header>
      
      <main className="flex-grow">
        {/* Modules Section */}
        <section className="py-20 bg-surface-container-low">
          <div className="max-w-[1280px] mx-auto px-gutter">
            <div className="text-center mb-16">
              <h1 className="font-h1 text-h1 text-primary mb-space-sm">Explore Our Services</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Everything you need to manage your campus experience. Streamlined bookings for venues, accommodations, and transportation.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Venue Booking Card */}
              <div className="bg-surface-container-lowest p-space-lg rounded-xl ambient-shadow-l1 border border-outline-variant hover:border-secondary transition-all flex flex-col h-full">
                <div className="w-12 h-12 rounded-lg bg-secondary-fixed flex items-center justify-center text-secondary mb-space-lg">
                  <span className="material-symbols-outlined text-3xl">meeting_room</span>
                </div>
                <h3 className="font-h3 text-h3 text-primary mb-space-sm">Venue Booking</h3>
                <p className="font-body-md text-body-md text-on-surface-variant flex-grow mb-space-lg">
                  Secure auditoriums, meeting rooms, and event halls with real-time availability and technical specs.
                </p>
                <button className="w-full py-space-md bg-primary text-on-primary font-label-md text-label-md rounded-lg hover:bg-primary-container transition-colors">Book Now</button>
              </div>
              
              {/* Guest Room Booking Card */}
              <div className="bg-surface-container-lowest p-space-lg rounded-xl ambient-shadow-l1 border border-outline-variant hover:border-secondary transition-all flex flex-col h-full">
                <div className="w-12 h-12 rounded-lg bg-secondary-fixed flex items-center justify-center text-secondary mb-space-lg">
                  <span className="material-symbols-outlined text-3xl">bed</span>
                </div>
                <h3 className="font-h3 text-h3 text-primary mb-space-sm">Guest Room Booking</h3>
                <p className="font-body-md text-body-md text-on-surface-variant flex-grow mb-space-lg">
                  Premium guest house accommodations featuring all modern amenities for university guests and faculty.
                </p>
                <button className="w-full py-space-md bg-primary text-on-primary font-label-md text-label-md rounded-lg hover:bg-primary-container transition-colors">Book Now</button>
              </div>
              
              {/* Car Rental Card */}
              <div className="bg-surface-container-lowest p-space-lg rounded-xl ambient-shadow-l1 border border-outline-variant hover:border-secondary transition-all flex flex-col h-full">
                <div className="w-12 h-12 rounded-lg bg-secondary-fixed flex items-center justify-center text-secondary mb-space-lg">
                  <span className="material-symbols-outlined text-3xl">directions_car</span>
                </div>
                <h3 className="font-h3 text-h3 text-primary mb-space-sm">Car Rental</h3>
                <p className="font-body-md text-body-md text-on-surface-variant flex-grow mb-space-lg">
                  Professional transportation services for official visits, airport transfers, and local campus travel.
                </p>
                <button className="w-full py-space-md bg-primary text-on-primary font-label-md text-label-md rounded-lg hover:bg-primary-container transition-colors">Book Now</button>
              </div>
            </div>
          </div>
        </section>
        
        /* {/* Stats/Quality Section */}
        <section className="py-24">
          <div className="max-w-[1280px] mx-auto px-gutter">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-[48px] font-bold text-secondary mb-2">500+</div>
                <div className="font-label-md text-label-md text-on-surface-variant">Venues Managed</div>
              </div>
              <div className="text-center">
                <div className="text-[48px] font-bold text-secondary mb-2">10k+</div>
                <div className="font-label-md text-label-md text-on-surface-variant">Annual Guests</div>
              </div>
              <div className="text-center">
                <div className="text-[48px] font-bold text-secondary mb-2">99%</div>
                <div className="font-label-md text-label-md text-on-surface-variant">User Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-[48px] font-bold text-secondary mb-2">24/7</div>
                <div className="font-label-md text-label-md text-on-surface-variant">Support Ready</div>
              </div>
            </div>
          </div>
        </section> */
      </main>
      
      {/* Footer */}
      <footer className="bg-surface-container-lowest dark:bg-on-background border-t border-outline-variant dark:border-outline">
        <div className="max-w-[1280px] mx-auto px-gutter py-space-xl flex flex-col md:flex-row justify-between items-center gap-space-md">
          <div className="flex flex-col items-center md:items-start gap-space-xs">
            <span className="text-h3 font-h3 font-bold text-primary dark:text-inverse-primary">SRHU</span>
            <p className="font-caption text-caption text-on-surface-variant">© 2024 SRHU. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-space-lg">
            <a className="text-on-surface-variant dark:text-surface-variant font-body-md hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200 active:underline" href="#">Privacy Policy</a>
            <a className="text-on-surface-variant dark:text-surface-variant font-body-md hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200 active:underline" href="#">Terms of Service</a>
            <a className="text-on-surface-variant dark:text-surface-variant font-body-md hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200 active:underline" href="#">Contact Us</a>
            <a className="text-on-surface-variant dark:text-surface-variant font-body-md hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200 active:underline" href="#">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
