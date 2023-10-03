import React from 'react';
import styled from 'styled-components';
import theme from '../utils/Variables';
import { BASE_URL } from "../../config";

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const PopupContent = styled.div`
  color: ${theme.colors.white};
  position: relative;
  background-color: ${theme.colors.backgroundColor1};
  border-radius: 10px;
  padding: 20px;
  width: 80%;
  max-width: 400px;
`;

const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
`;

const BookingSection = styled.span`
    width: 100%;
    z-index: 10;
    box-sizing: border-box;
    text-align: center;
    padding: ${theme.layout.marginLeftRight};
    @media (min-width: ${theme.breakpoints.up.large}) {
        width: 50%;
        padding: ${theme.layout.spaceBetween90};
    }
    .subtitle {
        font-family: ${theme.typography.tertiaryFontFamily};
        font-size: 1.25rem;
        color: ${theme.colors.secondary};
        margin-bottom: 1rem;
        @media (min-width: ${theme.breakpoints.up.medium}) {
            font-size: 1.875rem;
            margin-bottom: 1.875rem;
        }
    }
    h2 {
        font-family: ${theme.typography.secondaryFontFamily};
        font-size: 1.75rem;
        color: ${theme.colors.white};
        margin-top: 1rem;
        @media (min-width: ${theme.breakpoints.up.medium}) {
            margin-top: 1.875rem;
            font-size: 2.5rem;
        }
    }
    .booking-section {
        margin: auto;
        width: 80%;
        form {
            display: flex;
            flex-direction: column;
            width: 100%;
            div {
                width: 100%;
            }
            select, input, textarea {
                box-sizing: border-box;
                font-family: ${theme.typography.primaryFontFamily};
                font-size: 0.9375rem;
                line-height: 1.375rem;
                font-weight: 400;
                color: ${theme.colors.paragraph};
                background-color: ${theme.colors.transparent};
                width: 100%;
                border: 1px ${theme.colors.paragraph} solid;
                padding: ${theme.layout.spaceBetween10};
                margin-bottom: ${theme.layout.spaceBetween20};
                @media (min-width: ${theme.breakpoints.up.medium}) {
                    font-size: 1rem;
                }
                &:focus {
                    outline: none;
                }
            }
            input[type="submit"] {
                font-family: ${theme.typography.primaryFontFamily};
                font-size: 0.875rem;
                font-weight: 400;
                color: ${theme.colors.white};
                padding: 0.375rem 1.625rem;
                background-color: ${theme.colors.link};
                width: unset;
                border-radius: 5px;
                border-style: none;
                display: inline-block;
                cursor: pointer;
                @media (min-width: ${theme.breakpoints.up.medium}) {
                    font-size: 1rem;
                    padding: 0.55rem 2.18rem;
                }
            }
        }
    }
`;

const ThankYouPopup = ({ onClose }) => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const currentTime = `${hours}:${minutes}`;

    async function handleBookingSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const searchParams = new URLSearchParams();
      
        for (const [key, value] of formData.entries()) {
          searchParams.append(key, value);
        }
      
        try {
            await fetch(`${BASE_URL}/api/booking/`, {
                method: "POST",
                body: searchParams,
                headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                },
            });

            // Reset the form
            event.target.reset();
        
        } catch (error) {
            console.error("Error:", error);
        }
    }

    return (
        <PopupOverlay onClick={onClose}>
          <PopupContent onClick={(e) => e.stopPropagation()}>
              <CloseButton onClick={onClose}>&times;</CloseButton>
              <BookingSection>
                    <p className="subtitle">Reservation</p>
                    <h2>BOOK A TABLE NOW !</h2>
                    <div className="booking-section">
                        <form onSubmit={handleBookingSubmit}>
                            <div>
                                <select name="person" id="person">
                                    <option value="1">1 Person</option>
                                    <option value="2">2 Person</option>
                                    <option value="3">3 Person</option>
                                    <option value="4">4 Person</option>
                                    <option value="5">5 Person</option>
                                    <option value="6">6 Person</option>
                                </select>
                            </div>
                            <div><input type="email" name="email" id="email" placeholder="Email"/></div>
                            <div><input type="time" name="time" id="time" defaultValue={currentTime}/></div>
                            <div><textarea name="message" id="message" rows="6" placeholder="Message"></textarea></div>
                            <div><input type="submit" value="RESERVE NOW" className="cta-button"/></div>
                        </form>
                    </div>
                </BookingSection>
          </PopupContent>
        </PopupOverlay>
    );
};

export default ThankYouPopup;
