# Local-preview shim only, preloaded by bin/jekyll. GitHub Pages pins Liquid 4.0.3, which calls
# Object#tainted? (removed in Ruby 3.2). It is never part of the deployed
# site build.
class Object
  def tainted?
    false
  end
end
