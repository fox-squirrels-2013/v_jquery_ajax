get '/' do
  # Look in app/views/index.erb
  erb :index
end

post '/color' do
  cell = rand(1..9)
  color = "#" + "%06x" % (rand * 0xffffff)
  #Create and return a JSON object with the random cell and color given below.
  if request.xhr?
    colors = {
      "color" => color,
      "cell" => cell
    }
    content_type :json
    colors.to_json
  else
    redirect '/'
  end
end
