import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { prisma } from '@/lib/db';

export default async function NewGamePage() {
  const pods = await prisma.pod.findMany({
    orderBy: { name: 'asc' },
    include: {
      players: {
        include: {
          player: {
            include: {
              decks: true
            }
          }
        }
      }
    }
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Link href="/dashboard/games" className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground">
          <ChevronLeft className="h-4 w-4" />
          Back to Games
        </Link>
      </div>
      
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Record Game</h1>
        <p className="text-muted-foreground">
          Record the results of a Commander game
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg border shadow-sm">
        {pods.length === 0 ? (
          <div className="text-center py-8">
            <h3 className="text-lg font-medium mb-2">No Pods Available</h3>
            <p className="text-muted-foreground mb-4">
              You need to create a pod before recording a game.
            </p>
            <Link
              href="/dashboard/pods/new"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md bg-purple-600 text-white hover:bg-purple-700"
            >
              Create Pod First
            </Link>
          </div>
        ) : (
          <form className="space-y-6" action="/api/games" method="POST">
            <div className="space-y-2">
              <label htmlFor="podId" className="block text-sm font-medium">
                Select Pod
              </label>
              <select
                id="podId"
                name="podId"
                className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                required
              >
                <option value="">Select a pod</option>
                {pods.map((pod) => (
                  <option key={pod.id} value={pod.id}>
                    {pod.name} ({pod.players.length} players)
                  </option>
                ))}
              </select>
              <p className="text-xs text-gray-500 mt-1">
                The pod determines which players can participate in the game.
              </p>
            </div>

            <div className="space-y-2">
              <label htmlFor="playedAt" className="block text-sm font-medium">
                Date Played
              </label>
              <input
                type="datetime-local"
                id="playedAt"
                name="playedAt"
                className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                defaultValue={new Date().toISOString().slice(0, 16)}
                required
              />
            </div>

            <div className="border-t border-gray-200 pt-4">
              <h3 className="font-medium mb-4">Players and Decks</h3>
              
              <div className="space-y-4">
                {pods.map((pod) => (
                  <div 
                    key={pod.id} 
                    className="border border-gray-200 rounded-md p-4 player-selection hidden" 
                    data-pod-id={pod.id}
                  >
                    {pod.players.length === 0 ? (
                      <p className="text-center text-gray-500">No players in this pod</p>
                    ) : (
                      <div className="space-y-4">
                        {pod.players.map((podPlayer) => (
                          <div key={podPlayer.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                            <div className="flex items-center mb-2">
                              <input
                                type="checkbox"
                                id={`player-${podPlayer.playerId}`}
                                name="playerIds"
                                value={podPlayer.playerId}
                                className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
                              />
                              <label 
                                htmlFor={`player-${podPlayer.playerId}`} 
                                className="ml-2 block text-sm font-medium text-gray-900"
                              >
                                {podPlayer.player.name}
                              </label>
                            </div>
                            
                            {podPlayer.player.decks.length > 0 ? (
                              <div className="ml-6 space-y-2">
                                <label className="block text-xs font-medium text-gray-500">
                                  Deck Used
                                </label>
                                <div className="space-y-1">
                                  {podPlayer.player.decks.map((deck) => (
                                    <div key={deck.id} className="flex items-center">
                                      <input
                                        type="radio"
                                        id={`deck-${deck.id}`}
                                        name={`deck-${podPlayer.playerId}`}
                                        value={deck.id}
                                        className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300"
                                        disabled
                                      />
                                      <label 
                                        htmlFor={`deck-${deck.id}`} 
                                        className="ml-2 block text-sm text-gray-800"
                                      >
                                        {deck.name} ({deck.commanderName})
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ) : (
                              <p className="ml-6 text-xs text-gray-500 italic">
                                Player has no decks yet
                              </p>
                            )}
                            
                            <div className="ml-6 mt-2">
                              <div className="flex items-center">
                                <input
                                  type="radio"
                                  id={`winner-${podPlayer.playerId}`}
                                  name="winnerId"
                                  value={podPlayer.playerId}
                                  className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300"
                                  disabled
                                />
                                <label 
                                  htmlFor={`winner-${podPlayer.playerId}`} 
                                  className="ml-2 block text-sm text-gray-800 font-medium"
                                >
                                  This player won the game
                                </label>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-end gap-2">
              <Link
                href="/dashboard/games"
                className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md bg-white hover:bg-gray-50"
              >
                Cancel
              </Link>
              <button
                type="submit"
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md bg-amber-600 text-white hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
              >
                Record Game
              </button>
            </div>
          </form>
        )}
      </div>
      
      <script dangerouslySetInnerHTML={{ __html: `
        // Simple client-side JavaScript to handle the pod selection
        document.addEventListener('DOMContentLoaded', function() {
          const podSelect = document.getElementById('podId');
          const playerSelections = document.querySelectorAll('.player-selection');
          
          function updatePlayerSelections() {
            const selectedPodId = podSelect.value;
            
            // Hide all player selection sections
            playerSelections.forEach(section => {
              section.classList.add('hidden');
              
              // Disable all inputs in hidden sections
              section.querySelectorAll('input').forEach(input => {
                input.disabled = true;
              });
            });
            
            // Show the selected pod's player selection section
            if (selectedPodId) {
              const selectedSection = document.querySelector(\`[data-pod-id="\${selectedPodId}"]\`);
              if (selectedSection) {
                selectedSection.classList.remove('hidden');
                
                // Enable inputs in the visible section
                selectedSection.querySelectorAll('input').forEach(input => {
                  input.disabled = false;
                });
              }
            }
          }
          
          // Update player selections when the pod selection changes
          podSelect.addEventListener('change', updatePlayerSelections);
          
          // Setup player checkbox listeners to enable/disable associated deck radios
          playerSelections.forEach(section => {
            const playerCheckboxes = section.querySelectorAll('input[name="playerIds"]');
            
            playerCheckboxes.forEach(checkbox => {
              checkbox.addEventListener('change', function() {
                const playerId = this.value;
                const deckRadios = section.querySelectorAll(\`input[name="deck-\${playerId}"]\`);
                const winnerRadio = section.querySelector(\`input[id="winner-\${playerId}"]\`);
                
                deckRadios.forEach(radio => {
                  radio.disabled = !this.checked;
                  if (!this.checked) radio.checked = false;
                });
                
                if (winnerRadio) {
                  winnerRadio.disabled = !this.checked;
                  if (!this.checked) winnerRadio.checked = false;
                }
              });
            });
          });
          
          // Initial update
          updatePlayerSelections();
        });
      ` }} />
    </div>
  );
} 