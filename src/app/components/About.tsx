export default function About() {
     return(
        <div id="about" className="max-w-screen-lg w-full max-md:mt-24">
            <h2 className="text-5xl max-sm:text-4xl font-extrabold w-full text-center">
                About Us
            </h2>
            <div className="flex flex-col gap-6 mt-24 mx-12 text-pretty">
                <h3 className="text-2xl max-sm:text-xl font-extrabold">
                    The Challenge:
                </h3>
                <p className="pl-6 font-[family-name:var(--font-geist-mono)]">
                    Imagine you&#39;re hungry, out of food, and your only option is dining out—but
                    you have specific dietary requirements. Whether it&#39;s a food allergy, vegan lifestyle,
                    or other restriction, finding a meal that meets your needs can be difficult.
                </p>
                <h4 className="text-2xl max-sm:text-xl font-extrabold">
                    Our Solution:
                </h4>
                <p className="pl-6 font-[family-name:var(--font-geist-mono)]">
                    Welcome to NutriVerse—an AI-powered platform designed to simplify your food choices. 
                </p>
                <p className="font-[family-name:var(--font-geist-mono)]">
                    Our mission is to save you time and eliminate the frustration of navigating
                    through restaurant menus without finding what suits your dietary preferences.
                    With NutriVerse, you simply provide a restaurant&#39;s website link and share your
                    dietary concerns. Our AI assistant analyzes reviews and menus to deliver a personalized
                    summary that fits your needs.
                    
                    We understand that decoding food labels, restaurant menus, and online recipes
                    can be overwhelming. NutriVerse leverages cutting-edge AI to
                    streamline this process, offering tailored nutritional insights instantly, making
                    healthier eating more accessible and convenient for everyone.
                </p>
            </div>
        </div>
     )
}